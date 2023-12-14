import React, { useState } from "react";
import { Alert, SafeAreaView, View } from "react-native";
import CommonStyle from "../../styles/CommonStyle";
import CustomNavBar from "../../commonComponent/CustomNavBar";
import CustomHeader from "../../commonComponent/CustomHeader";
import CommonString from "../../styles/CommonString";
import ImagesPath from "../../images/ImagesPath";
import { useNavigation } from "@react-navigation/native";
import CommonTextInput from "../../commonComponent/CommonTextInput";
import CommonBtn from "../../commonComponent/CommonBtn";
import { paddings } from "../../utils/theme";
import NetInfo from "@react-native-community/netinfo";


/**
 * This is the screen for adding products
 * 
 * @returns Add product screen component
 */
const AddProduct = () => {

    const navigation = useNavigation();

    /**
     * This will store the input values for products inserted by user
     * 
     */
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')

    /**
     * This function will check all the input validations
     * @returns check weather all the inputs are in formate and then call add product API
     * 
     */
    const verifyAddProductInputs = () => {
        if(!(title!=null && title.length>0)){
            Alert.alert(CommonString.APP_NAME,CommonString.errorMsgEnterProductTitle)
        }else if(!(price!=null && price.length>0)){
            Alert.alert(CommonString.APP_NAME,CommonString.errorMsgEnterProductPrice)
        }else if(isNaN(price)){
            Alert.alert(CommonString.APP_NAME,CommonString.errorMsgEnterValidProductPrice)
        }else{
            callAddProductAPI()
        }
    }

    /**
     * This is main function which is responsible to add products using API call on server end
     * Also take care if there is no internet connectivity
     * 
     */
    const callAddProductAPI = () => {

        NetInfo.fetch().then(state => {
            if(state.isConnected){
                fetch('https://dummyjson.com/products/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: title,
                        price: price,
                    })
                })
                .then(res => res.json())
                .then(json => {
                    if(json!=null && Object.keys(json).length>0){
                        Alert.alert(CommonString.APP_NAME,CommonString.successMsgProductAdded, [
                            {
                              text: CommonString.lblOk,
                              onPress: () => navigation.goBack(),
                              style: 'cancel',
                            }
                        ])
                    }else{
                        Alert.alert(CommonString.APP_NAME,CommonString.errorMsgProductAdditionFailed)
                    }
                })
                .catch(e => {
    
                })
                .finally(()=>{
    
                });
            }else{
                Alert.alert(CommonString.APP_NAME, CommonString.interConnectionIssue,[
                    {
                        text: CommonString.lblRetry,
                        onPress: () => callAddProductAPI(),
                        style: 'default',
                    }
                ])
            }
        });

    }

    /** UI will be render when screen init or while state changes */
    return(
        <SafeAreaView style={[CommonStyle.safeAreaViewStyle]}> 
            <CustomNavBar />
            <CustomHeader title={CommonString.lblAddProduct} isLeftIcon leftIcon={ImagesPath.IC_BACK_WHITE} leftIconClick={() => {navigation.goBack()}}/>
            <View>
                <CommonTextInput
                    label={CommonString.lblTitleProduct}
                    defaultValue={title}
                    kbType={"default"}
                    onTextChange={(e) => {
                        setTitle(e)
                    }}
                />

                <CommonTextInput
                    label={CommonString.lblProductPrice}
                    defaultValue={price}
                    kbType={"decimal-pad"}
                    onTextChange={(e) => {
                        setPrice(e)
                    }}
                />

                <View style={{alignSelf:'center'}}>
                    <CommonBtn
                        label={CommonString.lblAdd}
                        width={paddings.HSpace_20_PER}
                        onClick={()=>{
                            verifyAddProductInputs()
                        }}  
                    />
                </View>

            </View>
        </SafeAreaView>
    )

}

export default AddProduct;