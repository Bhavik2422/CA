import React from "react";
import { ActivityIndicator, Platform, View } from "react-native";
import { colors, opacity, paddings } from "../utils/theme";
import Constants from "../utils/Constants";

/**
 * This is common component which is used to display Activity Indicator between UI
 * 
 * @param {String} marginTop This much space indicator left on top
 * @param {String} loaderSize indicator size for android only within numbers, 'large', small
 * @param {String} loaderSizeIOS indicator size for iOS only within 'large', small
 * @param {String} colorLoader indicator colors
 * @param {String} loaderColorOpacity indicator color's opacity
 * @returns {React.JSX.Element} return UI element for activity indicator as per parameters passed
 */
const ActivityIndicatorComponent = ({marginTop, loaderSize, loaderSizeIOS, colorLoader, loaderColorOpacity }) => {
    return (
        <ActivityIndicator 
            style={{marginTop: marginTop == undefined ? paddings.HSpace_15PX : marginTop}} 
            size={Platform.OS == 'ios' ?  (loaderSizeIOS == undefined ? 'small' : loaderSizeIOS) : ((loaderSize == undefined ? Constants.SPLASH_LOADER_SIZE : loaderSize))} 
            color={((colorLoader == undefined ? colors.colorNavBar : colorLoader).concat(loaderColorOpacity == undefined ? opacity.OP_50 : loaderColorOpacity))} 
        />
    )
}

export default ActivityIndicatorComponent;