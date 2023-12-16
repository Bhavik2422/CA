import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import { colors, fontSizes, paddings } from "../utils/theme";

/**
 * This is Common header for any of Screen
 * 
 * @param {String} title  Header text for the screen
 * @param {String} leftIcon Left icon local image assest
 * @param {Boolean} isLeftIcon is left icon render
 * @param {String} isRightIcon Right icon local image assest
 * @param {Boolean} rightIcon is right icon render
 * @param {Function} leftIconClick left icon click callback function
 * @param {Function} rightIconClick right icon click callback function
 * 
 * @returns Header UI with desire icons and title will be return
 */
const CustomHeader = ({title, leftIcon, isLeftIcon, isRightIcon, rightIcon, leftIconClick, rightIconClick}) => {
    return(
        <View style={[CommonStyle.headerMain, {flexDirection:'row'}]}>
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