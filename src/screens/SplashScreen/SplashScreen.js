import React, { useEffect } from "react";
import { ActivityIndicator, BackHandler, SafeAreaView, Text, View } from "react-native"; 
import CommonStyle from "../../styles/CommonStyle";
import { useNavigation } from "@react-navigation/native";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import CommonString from "../../styles/CommonString";
import { colors, fontSizes, opacity, paddings } from "../../utils/theme";
import CustomLoader from "../../commonComponent/CustomLoader";
import Constants from "../../utils/Constants";
import * as deviceInfo from '../../utils/DeviceInfo'
import ActivityIndicatorComponent from "../../commonComponent/ActivityIndicatorComponent";

/**
 * This is the first screen shown to the user
 * After 2 second of delay user will land on the home screen
 * 
 * @returns Splash screen Component
 */
const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
      
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: CommonString.DASHBOARD_TAB_NAV }],
            })
        }, 2000);
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)

        return () => {
            backHandler.remove()
        }
    }, [])

    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}>
            <CustomNavBar />
            <View style={[CommonStyle.splashMainView, {flex:1}]}>
                <Text style={[CommonStyle.splashWelcomeText]}>{CommonString.lblSplashScreen}</Text>
                <ActivityIndicatorComponent colorLoader={colors.colorWhite} />
            </View>
            <Text style={[CommonStyle.splashVersionText]}>{CommonString.lblVersion}{" "}{deviceInfo.getDeviceAppVersion()}</Text>
        </SafeAreaView>
    );

}

export default SplashScreen;