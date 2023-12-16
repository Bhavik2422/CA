import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CommonString from "../../styles/CommonString";
import ImagesPath from "../../images/ImagesPath";
import { colors, paddings } from "../../utils/theme";

/**
 * This is the Custom made tab for the application
 * This will render 3 tabs 
 * 
 * @param {Object} state To find which tab is active and which is inactive
 * @param {Object} descriptors --
 * @param {Object} navigation used for navigate through pages 
 * @returns UI component for TAB navigation
 */
const CustomTabBar = ({ state, descriptors, navigation }) => {

    /** Navigate through Home/Product listing tab */
    const gotoHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: CommonString.HOME_SCREEN }],
        })
    }

    
    /** Navigate through Search tab */
    const gotoSearch = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: CommonString.SEARCH_SCREEN }],
        })
    }

    /** Navigate through Account tab */
    const gotoAccount = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: CommonString.ACCOUNT_SCREEN }],
        })
    }

    /** UI will be render when screen init or while state changes */
    return(
        <View style={[CommonStyle.bottomBarMainViewShadow]}>
            
            <Pressable
                onPress={()=>{
                    gotoHome();
                }} 
                style={[CommonStyle.bottomBarPressable, CommonStyle.rightSideBorder]}>

                <Image style={[CommonStyle.bottomBarImageStyle]} source={state.index === 0 ? ImagesPath.IC_HOME_SELECTED : ImagesPath.IC_HOME_DESELECTED} />
                <Text style={[state.index === 0 ? CommonStyle.bottomBarActiveStyle : CommonStyle.bottomBarInActiveStyle,{}]}>{CommonString.lblProducts}</Text>
            </Pressable>

            <Pressable 
                onPress={()=>{
                    gotoSearch();
                }} 
                style={[CommonStyle.bottomBarPressable, CommonStyle.rightSideBorder]}>
                <Image style={[CommonStyle.bottomBarImageStyle]} source={state.index === 1 ? ImagesPath.IC_SEARCH_SELECTED : ImagesPath.IC_SEARCH_DESELECTED} />
                <Text style={[state.index === 1 ? CommonStyle.bottomBarActiveStyle : CommonStyle.bottomBarInActiveStyle,{}]}>{CommonString.lblSearch}</Text>
            </Pressable>

            <Pressable 
                onPress={()=>{
                    gotoAccount();
                }} 
                style={[CommonStyle.bottomBarPressable]}>
                <Image style={[CommonStyle.bottomBarImageStyle]} source={state.index === 2 ? ImagesPath.IC_ACCOUNT_SELECTED : ImagesPath.IC_ACCOUNT_DESELECTED} />
                <Text style={[state.index === 2 ? CommonStyle.bottomBarActiveStyle : CommonStyle.bottomBarInActiveStyle,{}]}>{CommonString.lblAccount}</Text>
            </Pressable>
            
        </View>
    )

}

export default CustomTabBar