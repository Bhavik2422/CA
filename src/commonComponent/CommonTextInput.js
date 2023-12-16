import React from "react";
import { Text, TextInput, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import CommonString from "../styles/CommonString";
import { colors, paddings } from "../utils/theme";

/**
 * This is common TextInput UI.
 * 
 * @param {String} label Label above the textinput to be shown
 * @param {String} defaultValue Default value shown when Textinput render first
 * @param {String} kbType Keyboard type e.g. email-address, decimal-number
 * @param {Function} onTextChange this is the function called when onChangeText called
 * @param {String} hint Placeholder text
 * @param {String} hintColor Placeholder text color
 * @param {String} returnKey Instead of icon this name will be shown in bottom right corner of keyboard e.g. Go, Search
 * @param {String} returnKeyType Keyboard will set this key type on bottom right corner e.g. Go, Search
 * @param {Function} onSubmitReturnKey this function will be called when user hits on GO/Search key on keyboard
 * @param {Boolean} isPassword for password secure entry
 * @param {Int} marginTop margin top
 * @param {Boolean} editable default true, just for showing information make it false
 * @returns Textinput UI with desire values and functions
 */

const CommonTextInput = ({label, defaultValue, kbType, onTextChange
    , hint, hintColor, returnKey, returnKeyType, onSubmitReturnKey
    , isPassword, marginTop, editable=true }) => {

    return(
        <View style={[CommonStyle.searchInputMain,{marginTop: marginTop == undefined ? paddings.HSpace_15PX : marginTop}]}>
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
                editable={editable}
            />
        </View>
    )

}

export default CommonTextInput;