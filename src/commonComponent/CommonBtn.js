import React from "react";
import { Pressable, Text, View } from "react-native";
import { borderRadius, colors, fontSizes, paddings } from "../utils/theme";
import CommonStyle from "../styles/CommonStyle";

/**
 * This is common button UI.
 * 
 * @param {String} label  
 * @param {String} width
 * @param {Function} onClick clickEvent function
 * @returns Button UI with desire width, label and click event
 */
const CommonBtn = ({label, width, onClick, marginTop}) => {
    return(
        <Pressable onPress={onClick} style={[CommonStyle.customBtnMain, {width: width == undefined ? paddings.HSpace_20_PER: width, marginTop: marginTop==undefined ? paddings.HSpace_15PX : marginTop}]}>
            <Text style={[CommonStyle.customBtnText]}>{label}</Text>
        </Pressable>
    )
}

export default CommonBtn;