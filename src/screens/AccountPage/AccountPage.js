import React, { useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import * as session from '../../asyncStorage/sessionAsync'
import CommonTextInput from "../../commonComponent/CommonTextInput";
import CommonString from "../../styles/CommonString";
import { colors, paddings } from "../../utils/theme";
import CommonBtn from "../../commonComponent/CommonBtn";
import { API_NAME, getApiURL, getKey, getLoginAPI, logoutFromApp, validateEmail } from "../../utils/GeneralFunction";
import { ScrollView } from "react-native-gesture-handler";
import NetInfo from "@react-native-community/netinfo";
import CustomHeader from "../../commonComponent/CustomHeader";
import ImagesPath from "../../images/ImagesPath";
import CustomLoader from "../../commonComponent/CustomLoader";
import ActivityIndicatorComponent from "../../commonComponent/ActivityIndicatorComponent";
import Constants from "../../utils/Constants";

/**
 * This is the screen shows user detail if user logged in or shows login page.
 * If user didn't logged in then he can enter creditional and logged in.
 * Once user logged in they can add product via home TAB, or they can view user data here.
 * They can logged out too using Logout button
 * 
 * @returns Account tab screen component
 */
const AccountPage = () => {

    /** If user login then logged in user data will be stored in this state */
    const [userData, setUserData] = useState({})

    /** Stats for username and passowrd */
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    /** This variable used to control the loader on the screen */
    const [loader, setLoader] = useState(false);

    /**
     * 
     * This will get user data from session and stored in the stats
     */
    useEffect(()=>{

        session.getPrefData(session.SESSION_NAME.USER_LOGIN,(data, response)=>{
            if(data == session.RESPONSE_TYPE.SUCCESS){
                setUserData(JSON.parse(response));
            }else{
                setUserData({})
            }
        })

        return ()=>{

        }
    },[])

    /**
     * This function varify user login inputs and call API for login
     */
    const verifyLoginInputs = () => {
        if(!(userName !=null && userName.length > 0)){
            Alert.alert(CommonString.APP_NAME,CommonString.errorMsgEnterUsername)
        }else if(!(password !=null && password.length > 0)){
            Alert.alert(CommonString.APP_NAME,CommonString.errorMsgEnterPassword)
        } 
        // else if(!validateEmail(email)){
        //     Alert.alert(CommonString.APP_NAME,CommonString.errorMsgEnterValidEmail)
        // }
        else{
            callLoginAPI()
        }
    }

     /**
     * This is main function which is responsible for user login activity
     * It will call the API and store/changes stats/sessions accordingly
     * 
     */
    const callLoginAPI = () => {
        setLoader(true);
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                fetch(getApiURL(API_NAME.LOGIN_API), {
                    method: Constants.POST,
                    headers: Constants.HEADER_GENERAL,
                    body: JSON.stringify({
                        username: userName,
                        password: password,
                    })
                })
                .then(res => res.json())
                .then(response => {
                    // console.log("response:: "+JSON.stringify(response));
                    if(response!=null && Object.keys(response).length>0 && response.id != undefined){
                        session.setPrefData(session.SESSION_NAME.USER_LOGIN, JSON.stringify(response),(res, data)=>{
                            if(res == session.RESPONSE_TYPE.SUCCESS){
                                clearFiledData(response)
                            }
                        })
                    }else{
                        Alert.alert(CommonString.APP_NAME,CommonString.errorMsgWrongCred)
                    }
                }).catch(e =>{
        
                }).finally(()=>{
                    setLoader(false);
                })
            }else{
                setLoader(false);
                Alert.alert(CommonString.APP_NAME, CommonString.interConnectionIssue,[
                    {
                        text: CommonString.lblRetry,
                        onPress: () => callLoginAPI(),
                        style: 'default',
                    }
                ])
            }
        });

       
    }

    /**
     * This function changes user data stats and responsible to change component login to 
     * @param {Object} response  User data that need to be store in ssession as well as in local stats 
     */
    const clearFiledData = (response) => {
        setUserName('')
        setPassword('')
        setUserData(response);
    }

    /** UI will be render when screen init or while state changes 
     * Depends on user logged in or not it will render 2 UI
     * One UI is for login activity to log-in user and 
     * the other UI is for displaying user data after logged in.
    */
    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}>
            <CustomNavBar />
            <ScrollView contentContainerStyle={{justifyContent:'center', flex:1,backgroundColor:colors.colorWhite}}>
                {
                    userData!=null && Object.keys(userData).length > 0 
                        ?   
                            <View style={{flex:1}}>
                                <CustomHeader isRightIcon rightIcon={ImagesPath.IC_LOGOUT} rightIconClick={()=>{
                                     logoutFromApp()
                                     setUserData({})
                                }} />
                                {
                                    userData.image != null
                                        ?
                                            <Image style={[CommonStyle.productImageWH, {alignSelf:'center'}]} source={{uri: userData?.image}}/>
                                        : null
                                }
                                
                                <CommonTextInput
                                    label={CommonString.lblFirstName}
                                    editable={false}
                                    defaultValue={userData?.firstName}
                                />

                                <CommonTextInput
                                    label={CommonString.lblLastName}
                                    editable={false}
                                    defaultValue={userData?.lastName}
                                />

                                <CommonTextInput
                                    label={CommonString.lblEmail}
                                    editable={false}
                                    defaultValue={userData?.email}
                                />

                                <CommonTextInput
                                    label={CommonString.lblGender}
                                    editable={false}
                                    defaultValue={userData?.gender}
                                />
                                
                            </View>
                        :   
                            <View>
                                <CommonTextInput
                                    label={CommonString.lblUserName}
                                    defaultValue={userName}
                                    kbType={"default"}
                                    onTextChange={(e) => {
                                        setUserName(e)
                                    }}
                                    editable={!loader}
                                    hint={CommonString.lblHintUsername}
                                    hintColor={colors.colorTextInActive}
                                />
                
                                <CommonTextInput
                                    label={CommonString.lblPassword}
                                    defaultValue={password}
                                    kbType={"default"}
                                    onTextChange={(e) => {
                                        setPassword(e)
                                    }}
                                    editable={!loader}
                                    hint={CommonString.lblHintPassword}
                                    hintColor={colors.colorTextInActive}
                                    isPassword
                                />
                
                                <View style={{alignSelf:'center'}}>
                                    {
                                        loader
                                            ? <ActivityIndicatorComponent />
                                            : 
                                                <CommonBtn 
                                                    label={CommonString.lblLogin}
                                                    width={paddings.HSpace_20_PER}
                                                    onClick={()=>{
                                                        verifyLoginInputs()
                                                    }}  
                                                />
                                    }
                                    
                                </View>
                
                            </View>
                }
            </ScrollView>
        </SafeAreaView>
    )

}

export default AccountPage;