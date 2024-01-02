import React, { useEffect } from "react";
import { ActivityIndicator, Alert, BackHandler, Platform, SafeAreaView, Text, View } from "react-native"; 
import CommonStyle from "../../styles/CommonStyle";
import { useNavigation } from "@react-navigation/native";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import CommonString from "../../styles/CommonString";
import { colors, fontSizes, opacity, paddings } from "../../utils/theme";
import CustomLoader from "../../commonComponent/CustomLoader";
import Constants from "../../utils/Constants";
import * as deviceInfo from '../../utils/DeviceInfo'
import ActivityIndicatorComponent from "../../commonComponent/ActivityIndicatorComponent";
import config from 'react-native-config';
import CustomNavBarWithTS from "../../commonComponent/CustomNavBarWithTS";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";


/**
 * This is the first screen shown to the user
 * After 2 second of delay user will land on the home screen
 * 
 * @returns Splash screen Component
 */
const SplashScreen = () => {

    const navigation = useNavigation();
    
    /**
     * Add bio matric login constant.
     */
    const rnBiometrics = new ReactNativeBiometrics()

    useEffect(() => {
      
        async function biomaticsLogin(){
            try {
                const { available, biometryType } = await rnBiometrics.isSensorAvailable();
          
                if (available) {
                  const result = await rnBiometrics.simplePrompt({
                    promptMessage: 'Authenticate',
                  });
          
                  if (result.success) {
                    // Biometric authentication successful
                    gotoNextScreen();
                  } else {
                    // Biometric authentication failed
                    Alert.alert("Biomatic failed !!")
                  }
                } else {
                  // Biometric authentication not available
                  // fallback to username/password login 
                  Alert.alert("Biomatic not available !!")
                  gotoNextScreen()
                }
            } catch (error) {
                // console.log(error.toString);
                Alert.alert("Error in biomatic !!"+error.toString())
            }
            
        }
        biomaticsLogin()

        
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)

        return () => {
            backHandler.remove()
        }
    }, [])

    const gotoNextScreen = () => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: CommonString.DASHBOARD_TAB_NAV }],
            })
        }, 2000);
    }

    const isFrom = config.APP_CONFIG ?? ''

    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}>
            <CustomNavBarWithTS />
            <View style={[CommonStyle.splashMainView, {flex:1}]}>
                <Text style={[CommonStyle.splashWelcomeText]}>{CommonString.lblSplashScreen}</Text>
                <ActivityIndicatorComponent colorLoader={colors.colorWhite} />
            </View>
            <Text style={[CommonStyle.splashVersionText]}>{CommonString.lblVersion}{ "("+isFrom+")" }{" "}{deviceInfo.getDeviceAppVersion()}</Text>
        </SafeAreaView>
    );

}

export default SplashScreen;