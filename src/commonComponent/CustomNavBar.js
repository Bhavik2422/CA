import { useIsFocused } from "@react-navigation/native";
import React from "react";
import {StatusBar, View} from 'react-native';
import { colors } from "../utils/theme";
import { isEmpty } from "lodash";

/**
 * This is common function to set navigation bar color in android
 * 
 * @param {color} String on android it is displaying navigation bar color
 * @return Component which will set navigation bar color on android.
 */
const CustomNavBar = ({color}) => {
    function FocusAwareStatusBar(props) {
        const isFocused = useIsFocused();
      
        return isFocused ? <StatusBar {...props} /> : null;
    }

    if(isEmpty(color)){
        return(
            <FocusAwareStatusBar backgroundColor={colors.colorNavBar} barStyle="light-content" />
        );
    }else{
        return(
            <FocusAwareStatusBar backgroundColor={color} barStyle="light-content" />
        );    
    }
    
}

export default CustomNavBar;