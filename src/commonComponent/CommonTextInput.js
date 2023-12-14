import React from "react";
import { Text, TextInput, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import CommonString from "../styles/CommonString";

const CommonTextInput = ({label, defaultValue, kbType, onTextChange
    , hint, hintColor, returnKey, returnKeyType, onSubmitReturnKey, isPassword }) => {

    return(
        <View style={[CommonStyle.searchInputMain]}>
            <Text style={[CommonStyle.searchInputLabel]}>{label}</Text>
            <TextInput
                style={[CommonStyle.searchInputView]} 
                defaultValue={defaultValue} 
                keyboardType={kbType}
                onChangeText={onTextChange}
                placeholder={hint}
                placeholderTextColor={hintColor}
                returnKeyLabel={returnKey}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitReturnKey}
                secureTextEntry={isPassword}
            />
        </View>
    )

}

export default CommonTextInput;