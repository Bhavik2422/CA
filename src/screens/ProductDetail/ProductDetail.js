import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import CommonStyle from "../../styles/CommonStyle";
import ImagesPath from "../../images/ImagesPath";
import CommonString from "../../styles/CommonString";
import { colors, paddings } from "../../utils/theme";
import NoRecFound from "../../commonComponent/NoRecFound";
import { getKey } from "../../utils/GeneralFunction";
import CustomHeader from "../../commonComponent/CustomHeader";

/**
 * This is the screen shows when user click on product items.
 * 
 * @returns Product detail screen component
 */
const ProductDetail = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [item, setItem] = useState({});

    /**
     * This use effect will be called on changes of parameters passed from parent screen.
     * This will set the item details stats
     * 
     * @returns while destoring the screen it will empty the searched item and search state
     * 
     */
    useEffect(()=>{
        // console.log("params: "+JSON.stringify(route.params))
        setItem(route.params?.items)
        return ()=>{
            setItem({})
        }
    },[route.params])

    /** UI will be render when screen init or while state changes */
    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}> 
            <CustomNavBar />
            <CustomHeader title={CommonString.lblProductDetails} isLeftIcon leftIcon={ImagesPath.IC_BACK_WHITE} leftIconClick={() => {navigation.goBack()}}/>
            
            <View style={{backgroundColor:colors.colorWhite, flex:1}}>
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                    <FlatList
                        data={item.images}
                        horizontal
                        scrollEnabled
                        renderItem={({index, item}) => 
                            <View style={[{paddingStart: index == 0 ? paddings.HSpace_15PX : 0, paddingEnd: paddings.HSpace_15PX, paddingVertical: paddings.HSpace_15PX}]}>
                                <Image resizeMode="contain" style={[CommonStyle.productDetailImageWH]} source={{uri: item}}/>
                            </View>
                        }
                        keyExtractor={(index, item) => getKey(index)}
                        ListEmptyComponent={
                            <View style={{alignSelf:'center'}}>
                                <NoRecFound message={CommonString.msgNoImagesAvailable}/>
                            </View>
                        }
                    />
                    <View style={[CommonStyle.productDetailMainTags]}>
                        <Text style={[CommonStyle.productDetailTextLbl, {flex:1.6}]}>{CommonString.lblTitle}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{item.title}</Text></Text>
                        <Text style={[CommonStyle.productDetailTextLbl, {flex:0.7}]}>{CommonString.lblRating}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{item.rating}</Text></Text>
                        <Text style={[CommonStyle.productDetailTextLbl, {flex:0.7}]}>{CommonString.lblStock}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{item.stock}</Text></Text>
                    </View>
                    
                    <View style={[CommonStyle.productDetailMainTags]}>
                        <Text  style={[CommonStyle.productDetailTextLbl, {flex:1}]}>{CommonString.lblCategory}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{item.category}</Text></Text>
                        <Text  style={[CommonStyle.productDetailTextLbl, {flex:1}]}>{CommonString.lblBrand}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{item.brand}</Text></Text>
                    </View>
                    
                    <View style={[CommonStyle.productDetailMainTags]}>
                        <Text style={[CommonStyle.productDetailTextLbl, {flex:1},item.discountPercentage > 0 ? CommonStyle.lineThrough : {}]}>{CommonString.lblPrice}{" : "}<Text style={[CommonStyle.productDetailTextLblExt,item.discountPercentage > 0 ? CommonStyle.lineThrough : {}]}>{item.price}</Text></Text>
                        {
                            item.discountPercentage > 0
                                ?
                                    <Text  style={[CommonStyle.productDetailTextLbl, {flex:1}]}>{CommonString.lblDiscountPrice}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{item.discountPercentage}</Text></Text>
                                : null
                        }
                        
                    </View>

                    <Text style={[CommonStyle.productDetailMainTags, CommonStyle.productDetailTextLbl, {marginHorizontal: paddings.HSpace_15PX, alignSelf:'flex-start',marginTop: paddings.VSpace_10PX} ]}>{CommonString.lblDescription}{" : "}<Text style={[CommonStyle.productDetailTextLblExt]}>{item.description}</Text></Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );

}

export default ProductDetail;