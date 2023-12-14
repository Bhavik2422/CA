import React from "react";
import { Pressable, Text, View } from "react-native";
import { borderRadius, colors, fontSizes, paddings } from "../utils/theme";

const CommonBtn = ({label, width, onClick}) => {
    return(
        <Pressable onPress={onClick} style={{justifyContent:'center',backgroundColor:colors.colorWhite, borderRadius: borderRadius.BR_10, marginTop: paddings.VSpace_10PX, width: width}}>
            <Text style={{alignSelf:'center',fontSize: fontSizes.Font_w12, color: colors.colorNavBar, marginHorizontal: paddings.HSpace_10PX, marginVertical: paddings.VSpace_10PX}}>{label}</Text>
        </Pressable>
    )
}

export default CommonBtn;