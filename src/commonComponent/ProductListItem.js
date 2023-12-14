import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";

const ProductListItem = ({index, item, onItemClick}) => {
    // console.log("index:: "+index)
    return(
        <Pressable key={index} style={[CommonStyle.productItemSpace]} onPress={() => {
            onItemClick(item)
        }}>
            <Image style={[CommonStyle.productImageWH]} resizeMode="contain" source={{uri: item.thumbnail}}/>
            <Text style={[CommonStyle.productItemText]}>{item.title}</Text>
        </Pressable>
    )
}

export default ProductListItem;