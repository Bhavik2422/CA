import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, FlatList, Image, Alert } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import { paddings } from "../../utils/theme";
import CommonString from "../../styles/CommonString";
import NoRecFound from "../../commonComponent/NoRecFound";
import ProductListItem from "../../commonComponent/ProductListItem";
import { getKey } from "../../utils/GeneralFunction";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../commonComponent/CustomHeader";
import ImagesPath from "../../images/ImagesPath";
import * as session from '../../asyncStorage/sessionAsync';
import NetInfo from "@react-native-community/netinfo";

/** This variable restrict 2 API call at a time */
var apiCallStart = false;

/**
 * This is the screen shows when user first come to home screen.
 * 
 * @returns Product list screen component
 */
const HomePage = () => {

    const navigation = useNavigation();

    /** If user login then logged in user data will be stored in this state */
    const [userData, setUserData] = useState({})
    
    /** Product list API response and pagination logic works here */
    var [apiResponse, setAPIResponse] = useState({pageNumber: 0, limit: 20, productList: []})

     /**
     * This will call the first API of product list with page number 1
     * This will get user data from session and stored in the stats
     * 
     * @returns while destoring the screen it will empty the product list and stored user data stats
     * 
     */
    useEffect(()=>{
        apiCallStart = false;
        try {

            session.getPrefData(session.SESSION_NAME.USER_LOGIN,(data, response)=>{
                if(data == session.RESPONSE_TYPE.SUCCESS){
                    setUserData(JSON.parse(response));
                }else{
                    setUserData({})
                }
            })    

            if(!apiCallStart){
                // console.log("1")
                let apiURL = `https://dummyjson.com/products?skip=${(apiResponse.pageNumber*apiResponse.limit)}&limit=${apiResponse.limit}`
                callProductListAPI(apiURL)
            }
        } catch (error) {
            
            // console.log(error)
        }

        return ()=>{
            apiCallStart = false;
            apiResponse = {pageNumber: 0, limit: 20, productList: []}
            setAPIResponse(apiResponse);
        }
    },[])

    /** This will call the next page data e.g. page 1 is loaded then it will call page 2 and on wards */
    const callNextPage = () => {
        if(!apiCallStart){
            // console.log("2")
            let apiURL = `https://dummyjson.com/products?skip=${(apiResponse.pageNumber*apiResponse.limit)}&limit=${apiResponse.limit}`
            callProductListAPI(apiURL)
        }
    }

    /**
     * This is main function which is responsible to make changes of stats of product list regards on what it is getting from server as a reponse
     * @param {api} String API url with page number and limit in query string formate 
     */
    const callProductListAPI = (api) => {
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                apiCallStart = true;
                // console.log("api : "+api)
                fetch(api)
                    .then(res => res.json())
                    .then(json => {
                        // console.log(json)
                        apiResponse = {
                            pageNumber : ++apiResponse.pageNumber,
                            limit:20,
                            productList: apiResponse.productList.concat(json.products)
                        }
                        setAPIResponse(apiResponse);
                    }).catch((err) => {
                        
                        // console.log("ERROR : "+JSON.stringify(err))
    
                    }).finally(() => {
                        // conssole.log("FINALLY : "+JSON.stringify(apiResponse))
                        apiCallStart = false;
                    })
            }else{
                Alert.alert(CommonString.APP_NAME, CommonString.interConnectionIssue,[
                    {
                        text: CommonString.lblRetry,
                        onPress: () => callProductListAPI(api),
                        style: 'default',
                    }
                ])
            }
        });
        
            
    }

    /* This function navigate to the detail page of particular product */
    const gotoDetails = (item) => {
        // console.log("item: "+JSON.stringify(item));
        navigation.navigate(CommonString.PRODUCT_DETAIL,{items: item})
    }

    /** This function navigate to the add product page if user logged in */
    const addProduct = () => {
        // console.log("Add product");
        navigation.navigate(CommonString.ADD_PRODUCT)
    }

    /** UI will be render when screen init or while state changes */
    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}>
            <CustomNavBar />
            {
                userData!=null && Object.keys(userData).length>0
                    ? <CustomHeader title={''} isRightIcon rightIcon={ImagesPath.IC_ADD_PRODUCT} rightIconClick={() => {addProduct()}}/>
                    : null
            }
            <FlatList
                data={apiResponse.productList}
                renderItem={({index, item}) => 
                   <ProductListItem index={getKey(index)} item={item} onItemClick={gotoDetails} />
                }
                keyExtractor={(index, item) => getKey(item.id)}
                ListEmptyComponent={
                    <NoRecFound message={CommonString.msgNoProductFound}/>
                }
                onEndReachedThreshold={0.9}
                onEndReached={callNextPage}
            />
        </SafeAreaView>
    )

}

export default HomePage;