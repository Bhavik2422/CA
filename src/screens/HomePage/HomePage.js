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


var apiCallStart = false;

const HomePage = () => {

    const navigation = useNavigation();
    const [userData, setUserData] = useState({})
    
    var [apiResponse, setAPIResponse] = useState({pageNumber: 0, limit: 20, productList: []})

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

    const callNextPage = () => {
        if(!apiCallStart){
            // console.log("2")
            let apiURL = `https://dummyjson.com/products?skip=${(apiResponse.pageNumber*apiResponse.limit)}&limit=${apiResponse.limit}`
            callProductListAPI(apiURL)
        }
    }

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

    const gotoDetails = (item) => {
        // console.log("item: "+JSON.stringify(item));
        navigation.navigate(CommonString.PRODUCT_DETAIL,{items: item})
    }

    const addProduct = () => {
        // console.log("Add product");
        navigation.navigate(CommonString.ADD_PRODUCT)
    }

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