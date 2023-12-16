import React from "react";
import { Text, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";

/**
 * This is common function to set if there is nothing to explore,
 * 
 * @param {String} message message to be display
 * @return Component which will set message if there is nothing to explore.
 */
const NoRecFound = ({message}) => {
    return(
        <View style={[CommonStyle.NoRecFoundMain]}>
            <Text style={[CommonStyle.NoRecFoundText]}>{message}</Text>
        </View>
    )
}

export default NoRecFound;