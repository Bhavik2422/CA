import React, { useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import * as session from '../../asyncStorage/sessionAsync'
import CommonTextInput from "../../commonComponent/CommonTextInput";
import CommonString from "../../styles/CommonString";
import { colors, paddings } from "../../utils/theme";
import CommonBtn from "../../commonComponent/CommonBtn";
import { logoutFromApp, validateEmail } from "../../utils/GeneralFunction";
import { ScrollView } from "react-native-gesture-handler";
import NetInfo from "@react-native-community/netinfo";

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
    const [userName, setUserName] = useState('kminchelle')
    const [password, setPassword] = useState('0lelplR')

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

        NetInfo.fetch().then(state => {
            if(state.isConnected){
                fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json; charset=utf-8' },
                    body: JSON.stringify({
                        username: userName,
                        password: password,
                    })
                })
                .then(res => res.json())
                .then(response => {
                    console.log("response:: "+JSON.stringify(response));
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
        
                })
            }else{
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
     * @param {response} Object User data that need to be store in ssession as well as in local stats 
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
            <ScrollView>
                {
                    userData!=null && Object.keys(userData).length > 0 
                        ?   
                            <View>
                                {
                                    userData.image != null
                                        ?
                                            <Image style={[CommonStyle.productImageWH, {alignSelf:'center'}]} source={{uri: userData?.image}}/>
                                        : null
                                }
                                
                                
                                <Text style={[CommonStyle.productDetailTextLbl, {marginTop: paddings.VSpace_10PX}]}>{CommonString.lblFirstName}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{userData?.firstName}</Text></Text>
                                <Text style={[CommonStyle.productDetailTextLbl, {marginTop: paddings.VSpace_10PX}]}>{CommonString.lblLastName}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{userData?.lastName}</Text></Text>
                                <Text style={[CommonStyle.productDetailTextLbl, {marginTop: paddings.VSpace_10PX}]}>{CommonString.lblEmail}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{userData?.email}</Text></Text>
                                <Text style={[CommonStyle.productDetailTextLbl, {marginTop: paddings.VSpace_10PX}]}>{CommonString.lblGender}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{userData?.gender}</Text></Text>
                                
                                <View style={{alignSelf:'center'}}>
                                    <CommonBtn 
                                        label={CommonString.lblLogout}
                                        width={paddings.HSpace_20_PER}
                                        onClick={()=>{
                                            logoutFromApp()
                                            setUserData({})
                                        }}  
                                    />
                                </View>
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
                                    hint={CommonString.lblHintPassword}
                                    hintColor={colors.colorTextInActive}
                                    isPassword
                                />
                
                                <View style={{alignSelf:'center'}}>
                                    <CommonBtn 
                                        label={CommonString.lblLogin}
                                        width={paddings.HSpace_20_PER}
                                        onClick={()=>{
                                            verifyLoginInputs()
                                        }}  
                                    />
                                </View>
                
                            </View>
                }
            </ScrollView>
        </SafeAreaView>
    )

}

export default AccountPage;