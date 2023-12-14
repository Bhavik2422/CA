import React from "react";
import { Text, TextInput, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import CommonString from "../styles/CommonString";

/**
 * This is common TextInput UI.
 * 
 * @param {label} String Label above the textinput to be shown
 * @param {defaultValue} String Default value shown when Textinput render first
 * @param {kbType} String Keyboard type e.g. email-address, decimal-number
 * @param {onTextChange} function this is the function called when onChangeText called
 * @param {hint} String Placeholder text
 * @param {hintColor} String Placeholder text color
 * @param {returnKey} String Instead of icon this name will be shown in bottom right corner of keyboard e.g. Go, Search
 * @param {returnKeyType} String Keyboard will set this key type on bottom right corner e.g. Go, Search
 * @param {onSubmitReturnKey} function this function will be called when user hits on GO/Search key on keyboard
 * @param {isPassword} false for password secure entry
 * @returns Textinput UI with desire values and functions
 */

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