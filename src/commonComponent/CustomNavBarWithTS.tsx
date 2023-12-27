import { useIsFocused } from "@react-navigation/native";
import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import {ColorValue, StatusBar, StatusBarStyle, View} from 'react-native';
import { colors } from "../utils/theme";
import { isEmpty } from "lodash";


type NavBarProps = {
    color: ColorValue
};
type FocusAwareStatusBarProps = {
    bgColor : ColorValue; 
    barBGStyle: StatusBarStyle;
};

/**
 * This is common function to set navigation bar color in android
 * 
 * @param {String} color on android it is displaying navigation bar color
 * @return Component which will set navigation bar color on android.
 */
const CustomNavBarWithTS = ({color} : NavBarProps) => {
    function FocusAwareStatusBar({bgColor,barBGStyle, ...otherProps} : FocusAwareStatusBarProps) {
        const isFocused = useIsFocused();
      
        return isFocused ? <StatusBar backgroundColor={bgColor} barStyle={barBGStyle} {...otherProps} /> : null;
    }

    if(isEmpty(color)){
        return(
            <FocusAwareStatusBar bgColor={colors.colorNavBar} barBGStyle="light-content" />
        );
    }else{
        return(
            <FocusAwareStatusBar bgColor={color} barBGStyle="light-content" />
        );    
    }
    
}

export default CustomNavBarWithTS;