import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import CommonStyle from "../styles/CommonStyle";

/**
 * This is common UI for product listing item
 * 
 * @param {index} String unique key for each items in a flatlist
 * @param {item} json json data to be display in this rendered UI
 * @param {onItemClick} function callback function for item click

 * @returns this will render the item UI for each products in a flatlist
 */

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