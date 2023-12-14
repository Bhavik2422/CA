import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import { colors, fontSizes, paddings } from "../utils/theme";

const CustomHeader = ({title, leftIcon, isLeftIcon, isRightIcon, rightIcon, leftIconClick, rightIconClick}) => {
    return(
        <View style={[{flexDirection:'row',justifyContent:'center', margin: paddings.HSpace_7_5PX}]}>
            <Pressable style={{alignSelf:'center'}} onPress={() => {isLeftIcon ? leftIconClick() : null}}>
                {
                    isLeftIcon
                        ?
                            <Image style={[CommonStyle.backBtnStyle]} source={leftIcon}/>
                        : null
                }
            </Pressable>
            <Text style={[CommonStyle.headerTitle, {flex:1}]}>{title}</Text>
            <Pressable style={{alignSelf:'center'}} onPress={() => {isRightIcon ? rightIconClick() : null}}>
                {
                    isRightIcon
                        ?
                            <Image style={[CommonStyle.headerBtnStyle]} source={rightIcon}/>
                        : null
                }
            </Pressable>
        </View>
    )
}

export default CustomHeader;