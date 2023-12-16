import React from "react";
import { ActivityIndicator, Platform, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import { colors, opacity } from "../utils/theme";
import Constants from "../utils/Constants";

/**
 * This is Common Loader for any of Screen
 * 
 * @param {Int} sizeForAndroid either 'large', 'small' or number e.g. 50,70 ## ONLY for Android
 * @param {String} sizeForIOS either 'large' or 'small' ## ONLY for IOS
 * @param {String} loaderColor color for loader e.g. #548697
 * @param {String} bgLoaderColorOpacity loader color opacity e.g. '50','1F'
 * 
 * @returns Loader UI with desire size and color, if size or color doesn't pass it will take default
 */
const CustomLoader = ({sizeForAndroid, sizeForIOS, loaderColor, bgLoaderColorOpacity}) =>{

    return(
        <View style={[CommonStyle.bgLoaderMain]}>
            <View
                style={[CommonStyle.customLoaderParent]}>

                {/* <ActivityIndicator size="small" color={colors.mainBGGreen} /> */}
                {/* <BlinkingImage /> */}
                <View style={[CommonStyle.loaderCircleStyle]}>
                    <View style={[CommonStyle.loaderCircleInnerStyle]}>
                        {/* <Progress.CircleSnail size={80} color={[colors.colorNavBar.concat(opacity.OP_50)]} thickness={5}/> */}
                        <ActivityIndicator size={Platform.OS == 'ios' ? (sizeForIOS== undefined ? 'large' : sizeForIOS) : (sizeForAndroid == undefined ? Constants.GENERAL_LOADER_SIZE : sizeForAndroid)} color={(loaderColor == undefined ? colors.colorNavBar : loaderColor).concat(bgLoaderColorOpacity == undefined ? opacity.OP_50 : bgLoaderColorOpacity)} />
                    </View>
                </View>
            </View>
        </View>
    );

}

export default CustomLoader;