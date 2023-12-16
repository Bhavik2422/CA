import React, { useEffect, useState } from "react";
import { SafeAreaView, View,Text, TextInput, FlatList, Image, Alert } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import CommonString from "../../styles/CommonString";
import { colors } from "../../utils/theme";
import NoRecFound from "../../commonComponent/NoRecFound";
import ProductListItem from "../../commonComponent/ProductListItem";
import { API_NAME, getApiURL, getKey } from "../../utils/GeneralFunction";
import CommonTextInput from "../../commonComponent/CommonTextInput";
import NetInfo from "@react-native-community/netinfo";
import { useNavigation } from "@react-navigation/native";
import CustomLoader from "../../commonComponent/CustomLoader";
import Constants from "../../utils/Constants";

/**
 * This is the second tab on the main page, User can search product using this component.
 * Searched item shown below the search input area.
 * 
 * This page include 1 API call of search product query
 * 
 * @returns Search screen tab component
 */
const SearchPage = () => {

    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');
    const [json, setJSON] = useState({});

    /** This variable used to control the loader on the screen */
    const [loader, setLoader] = useState(false);

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
        setLoader(true);

        NetInfo.fetch().then(state => {
            if(state.isConnected){
                let apiURL = getApiURL(API_NAME.SEARCH_PRODUCTS).concat(`?${Constants.QUERY_STRING_SEARCH}=${searchTerm}`)
                fetch(apiURL)
                    .then(res => res.json())
                    .then(json => {
                        // console.log(JSON.stringify(json.products))
                        
                        setJSON(json)
                    }).catch((err) => {
                        
                        // console.log("ERROR : "+JSON.stringify(err))
        
                    }).finally(() => {
                        // console.log("FINALLY : "+JSON.stringify(productList))
                        setLoader(false);
                    })
            }else{
                setLoader(false);
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

     /* This function navigate to the detail page of particular product */
     const gotoDetails = (item) => {
        // console.log("item: "+JSON.stringify(item));
        navigation.navigate(CommonString.PRODUCT_DETAIL,{items: item})
    }

    /** UI will be render when screen init or while state changes */
    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}>
            <CustomNavBar />
            
            <View style={{flex:1, backgroundColor:colors.colorWhite}}>
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

                {
                    loader 
                        ? <CustomLoader />
                        :
                            <FlatList
                                data={json.products}
                                renderItem={({index, item}) => <ProductListItem index={getKey(index)} item={item} onItemClick={gotoDetails} />}
                                keyExtractor={(index, item) => getKey(item.id)}
                                ListEmptyComponent={()=>
                                    <NoRecFound message={CommonString.msgNoSearchFound}/>
                                }
                            />
                }
            </View>

        </SafeAreaView>
    )

}

export default SearchPage;