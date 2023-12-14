import React from "react";
import { Text, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";

const NoRecFound = ({message}) => {
    return(
        <View style={[CommonStyle.NoRecFoundMain]}>
            <Text style={[CommonStyle.NoRecFoundText]}>{message}</Text>
        </View>
    )
}

export default NoRecFound;