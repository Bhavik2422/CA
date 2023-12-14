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

/**
 * This is the second tab on the main page, User can search product using this component.
 * Searched item shown below the search input area.
 * 
 * This page include 1 API call of search product query
 * 
 * @returns Search screen tab component
 */
const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [json, setJSON] = useState({});

    /**
     * this is API call for searching products
     * 
     * It will check internet connectivity and act accordingly.
     * if there is any result for searched item it will shows under the search area.
     * 
     * set states of searched items
     * 
     */
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

    /**
     * this use effect will be called on focus changes/creating/destoy the screen
     * 
     * @returns while destoring the screen it will empty the searched item and search state
     */
    useEffect(()=>{
        return () => {
            setSearchTerm('')
            setJSON({})
        }
    },[])

    /** UI will be render when screen init or while state changes */
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