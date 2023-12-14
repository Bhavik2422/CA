import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CommonString from "../../styles/CommonString";
import ImagesPath from "../../images/ImagesPath";

const CustomTabBar = ({ state, descriptors, navigation }) => {

    const gotoHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: CommonString.HOME_SCREEN }],
        })
    }

    const gotoSearch = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: CommonString.SEARCH_SCREEN }],
        })
    }

    const gotoAccount = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: CommonString.ACCOUNT_SCREEN }],
        })
    }

    return(
        <View style={[CommonStyle.bottomBarMainViewShadow]}>
            
            <Pressable
                onPress={()=>{
                    gotoHome();
                }} 
                style={[CommonStyle.bottomBarPressable]}>

                <Image style={[CommonStyle.bottomBarImageStyle]} source={state.index === 0 ? ImagesPath.IC_HOME_SELECTED : ImagesPath.IC_HOME_DESELECTED} />
                <Text style={[state.index === 0 ? CommonStyle.bottomBarActiveStyle : CommonStyle.bottomBarInActiveStyle,{}]}>{CommonString.lblProducts}</Text>
            </Pressable>

            <Pressable 
                onPress={()=>{
                    gotoSearch();
                }} 
                style={[CommonStyle.bottomBarPressable]}>
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