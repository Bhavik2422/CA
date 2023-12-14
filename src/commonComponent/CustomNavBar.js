import { useIsFocused } from "@react-navigation/native";
import React from "react";
import {StatusBar, View} from 'react-native';
import { colors } from "../utils/theme";
import { isEmpty } from "lodash";

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