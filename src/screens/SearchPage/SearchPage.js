import React, { useEffect, useState } from "react";
import { SafeAreaView, View,Text, TextInput, FlatList, Image } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import CommonString from "../../styles/CommonString";
import { colors } from "../../utils/theme";
import NoRecFound from "../../commonComponent/NoRecFound";
import ProductListItem from "../../commonComponent/ProductListItem";
import { getKey } from "../../utils/GeneralFunction";
import CommonTextInput from "../../commonComponent/CommonTextInput";
import NetInfo from "@react-native-community/netinfo";

const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [json, setJSON] = useState({});

    const callProductSearchAPI = () => {

        NetInfo.fetch().then(state => {
            if(state.isConnected){
                let apiURL = `https://dummyjson.com/products/search?q=${searchTerm}`
                fetch(apiURL)
                    .then(res => res.json())
                    .then(json => {
                        // console.log(JSON.stringify(json.products))
                        
                        setJSON(json)
                    }).catch((err) => {
                        
                        // console.log("ERROR : "+JSON.stringify(err))
        
                    }).finally(() => {
                        // console.log("FINALLY : "+JSON.stringify(productList))
                    })
            }else{
                Alert.alert(CommonString.APP_NAME, CommonString.interConnectionIssue,[
                    {
                        text: CommonString.lblRetry,
                        onPress: () => callProductSearchAPI(),
                        style: 'default',
                    }
                ])
            }
        });

       
    }

    useEffect(()=>{
        return () => {
            setSearchTerm('')
            setJSON({})
        }
    },[])

    

    

    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}>
            <CustomNavBar />
            
            <CommonTextInput
                label={CommonString.lblSearch}
                defaultValue={searchTerm}
                kbType={"default"}
                onTextChange={(e) => {
                    setSearchTerm(e)
                }}
                hint={CommonString.lblSearchHint}
                hintColor={colors.colorTextInActive}
                returnKey={CommonString.lblGo}
                returnKeyType={"search"}
                onSubmitReturnKey={()=>{
                    callProductSearchAPI()
                }}
            />

            <FlatList
                data={json.products}
                renderItem={({index, item}) => <ProductListItem index={getKey(index)} item={item} />}
                keyExtractor={(index, item) => getKey(item.id)}
                ListEmptyComponent={()=>
                    <NoRecFound message={CommonString.msgNoSearchFound}/>
                }
            />

        </SafeAreaView>
    )

}

export default SearchPage;