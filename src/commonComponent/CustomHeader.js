import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import { colors, fontSizes, paddings } from "../utils/theme";

/**
 * This is Common header for any of Screen
 * 
 * @param {title} String Header text for the screen
 * @param {leftIcon} String Left icon local image assest
 * @param {isLeftIcon} truefalse is left icon render
 * @param {isRightIcon} String Right icon local image assest
 * @param {rightIcon} truefalse is right icon render
 * @param {leftIconClick} function left icon click callback function
 * @param {rightIconClick} function right icon click callback function
 * 
 * @returns Header UI with desire icons and title will be return
 */
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