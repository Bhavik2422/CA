import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, FlatList, Image, Alert, ActivityIndicator } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import CustomNavBarWithTS from '../../commonComponent/CustomNavBarWithTS';
import { colors, opacity, paddings } from "../../utils/theme";
import CommonString from "../../styles/CommonString";
import NoRecFound from "../../commonComponent/NoRecFound";
import ProductListItem from "../../commonComponent/ProductListItem";
import { API_NAME, getApiURL, getKey } from "../../utils/GeneralFunction";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../commonComponent/CustomHeader";
import ImagesPath from "../../images/ImagesPath";
import * as session from '../../asyncStorage/sessionAsync';
import NetInfo from "@react-native-community/netinfo";
import CustomLoader from "../../commonComponent/CustomLoader";
import ActivityIndicatorComponent from "../../commonComponent/ActivityIndicatorComponent";
import CommonBtn from "../../commonComponent/CommonBtn";
import Constants from "../../utils/Constants";
import useUserLoginData from "../../CustomHooks/useUserLoginData";

/** This variable restrict 2 API call at a time */
var apiCallStart = false;

/**
 * This is the screen shows when user first come to home screen.
 * 
 * @returns Product list screen component
 */
const HomePage = () => {

    const navigation = useNavigation();

    /** If user login then logged in user data will be stored in this state 
     * Now user data will be stored in custom hook and 
     * get user data will be sync operation instead of async operation
    */
    // const [userData, setUserData] = useState({})
    const {userData} = useUserLoginData();

    /** This variable used to control the loader on the screen */
    const [loader, setLoader] = useState(false);
    
    /** Product list API response and pagination logic works here 
     * pageNumber => current page number
     * limit => number of records contain in the response
     * pageNumber*limit => number of records skip from top of the list
     * total => total number of records available for pagination
    */
    var [apiResponse, setAPIResponse] = useState({pageNumber: 0, limit: 20, productList: [], total: 1})

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

            /**
             * Due to custom hook 'useUserLoginData' this async operation will be removed from here
             */
            // session.getPrefData(session.SESSION_NAME.USER_LOGIN,(data, response)=>{
            //     if(data == session.RESPONSE_TYPE.SUCCESS){
            //         setUserData(JSON.parse(response));
            //     }else{
            //         setUserData({})
            //     }
            // })    

            if(!apiCallStart && apiResponse.total > apiResponse.productList.length){
                // console.log("1")
                let apiURL = getApiURL(API_NAME.GET_ALL_PRODUCTS).concat(`?${Constants.SKIP}=${(apiResponse.pageNumber*apiResponse.limit)}&${Constants.LIMIT}=${apiResponse.limit}`)
                callProductListAPI(apiURL)
            }
        } catch (error) {
            
            // console.log(error)
        }

        return ()=>{
            apiCallStart = false;
            apiResponse = {pageNumber: 0, limit: 20, productList: [], total: 1}
            setAPIResponse(apiResponse);
        }
    },[])

    /** This will call the next page data e.g. page 1 is loaded then it will call page 2 and on wards */
    const callNextPage = () => {
        // console.log("apiResponse: "+JSON.stringify(apiResponse))
        if(!apiCallStart && apiResponse.total > apiResponse.productList.length){
            // console.log("2")
            let apiURL =  getApiURL(API_NAME.GET_ALL_PRODUCTS).concat(`?${Constants.SKIP}=${(apiResponse.pageNumber*apiResponse.limit)}&${Constants.LIMIT}=${apiResponse.limit}`)
            callProductListAPI(apiURL)
        }
    }

    /**
     * This is main function which is responsible to make changes of stats of product list regards on what it is getting from server as a reponse
     * @param {String} api API url with page number and limit in query string formate 
     */
    const callProductListAPI = (api) => {
        Alert.alert(api);
        setLoader(true)
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
                            productList: apiResponse.productList.concat(json.products),
                            total: json.total
                        }
                        setAPIResponse(apiResponse);
                    }).catch((err) => {
                        
                        // console.log("ERROR : "+JSON.stringify(err))
                        apiResponse = {
                            pageNumber : apiResponse.pageNumber,
                            limit:20,
                            productList: apiResponse.productList,
                            total: 0
                        }
                        setAPIResponse(apiResponse);
                    }).finally(() => {
                        // console.log("FINALLY : "+JSON.stringify(apiResponse))
                        apiCallStart = false;
                        setLoader(false);
                    })

                    
            }else{
                setLoader(false);
                Alert.alert(CommonString.APP_NAME, CommonString.interConnectionIssue,[
                    {
                        text: CommonString.lblRetry,
                        onPress: () => {
                            apiResponse.total > apiResponse.productList.length
                                ? callProductListAPI(api)
                                : null
                        },
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
            <CustomNavBarWithTS />
            {
                userData!=null && Object.keys(userData).length>0
                    ? <CustomHeader title={''} isRightIcon rightIcon={ImagesPath.IC_ADD_PRODUCT} rightIconClick={() => {addProduct()}}/>
                    : null
            }
            <View style={{flex:1, backgroundColor:colors.colorWhite}}>
                {
                    loader && apiResponse.pageNumber == 0
                        ? <CustomLoader />
                        :
                                <FlatList
                                    contentContainerStyle={{paddingBottom: paddings.HSpace_15PX}}
                                    data={apiResponse.productList}
                                    renderItem={({index, item}) => 
                                        <ProductListItem index={getKey(index)} item={item} onItemClick={gotoDetails} />
                                    }
                                    keyExtractor={(index, item) => getKey(item.id)}
                                    ListEmptyComponent={
                                        <View style={{marginVertical: paddings.HSpace_15PX, justifyContent:'center'}}>
                                            <NoRecFound message={CommonString.msgNoProductFound}/>
                                            <View style={{alignSelf:'center'}}>
                                                <CommonBtn
                                                    label={CommonString.lblRetry}
                                                    width={paddings.HSpace_20_PER}
                                                    onClick={()=>{
                                                        apiResponse = {
                                                            pageNumber : apiResponse.pageNumber,
                                                            limit:20,
                                                            productList: apiResponse.productList,
                                                            total: 1
                                                        }
                                                        setAPIResponse(apiResponse);
                                                        callNextPage()
                                                    }}  
                                                />
                                            </View>
                                        </View>
                                    }
                                    ListFooterComponent={
                                        apiResponse.pageNumber > 0 && apiResponse.total > apiResponse.productList.length
                                            ?
                                                <ActivityIndicatorComponent />
                                            : null
                                    }
                                    onEndReachedThreshold={0.5}
                                    onEndReached={callNextPage}
                                />
                            
                }
            </View>
        </SafeAreaView>
    )

}

export default HomePage;