import {StyleSheet, Platform} from 'react-native';
import { borderRadius, colors, fontSizes, opacity, paddings } from '../utils/theme';

const CommonStyle = StyleSheet.create({
  safeAreaViewStyle:{
    flex:1,
    backgroundColor: colors.colorNavBar
  },
  splashMainView:{
    left:0,
    right:0,
    top:0,
    bottom:0,
    alignItems:'center'
  },
  bottomBarMainViewShadow:{
    flexDirection:'row', 
    backgroundColor:colors.colorWhite,  
    shadowOffset: { width: 1, height: 1 },
    shadowRadius:borderRadius.BR_5,
    shadowOpacity:opacity.PP_0_1,
    shadowColor:colors.colorShadow,
    elevation: 3,
  },
  bottomBarPressable:{
    flex:1, 
    justifyContent:'flex-end',
    marginVertical: paddings.VSpace_10PX,
  },
  bottomBarImageStyle:{
    alignSelf:'center', 
    height:paddings.HSpace_25PX, 
    width:paddings.HSpace_25PX,
  },
  bottomBarActiveStyle:{
    color:colors.colorTextActive, 
    fontSize: fontSizes.Font_w12,
    alignSelf:'center',
  },
  bottomBarInActiveStyle:{
    color:colors.colorTextInActive, 
    fontSize: fontSizes.Font_w12,
    alignSelf:'center',
  },
  productImageWH:{
    width: paddings.HSpace_100PX,
    height: paddings.HSpace_100PX
  },
  productItemSpace: {
    flexDirection:'row',
    marginHorizontal: paddings.HSpace_10PX, 
    marginTop: paddings.HSpace_10PX
  },
  productItemText:{
    fontSize: fontSizes.Font_w14,
    color: colors.colorWhite,
    marginStart: paddings.HSpace_10PX
  },
  NoRecFoundMain:{
    width: paddings.HSpace_90_PER,
    height: paddings.VSpace_30_PER,
    justifyContent:'center',
    borderWidth: paddings.HSpace_1PX,
    borderRadius: paddings.HSpace_15PX,
    borderColor: colors.colorRedError,
    alignSelf:'center',
    marginVertical: paddings.VSpace_10PX,
  },
  NoRecFoundText:{
    alignSelf:'center',
    fontSize: fontSizes.Font_w12,
    color: colors.colorRedError
  },
  searchInputMain:{
    margin: paddings.HSpace_10PX,

  },
  searchInputLabel:{
    alignSelf:'flex-start',
    fontSize: fontSizes.Font_w12,
    color: colors.colorWhite,
    marginVertical: paddings.VSpace_10PX,
    textAlign:'center',
    textAlignVertical:'center',
  },
  searchInputView:{
    borderWidth: paddings.HSpace_1PX,
    borderRadius: paddings.HSpace_15PX,
    borderColor: colors.colorWhite,
    backgroundColor:colors.colorWhite,
    paddingHorizontal: paddings.HSpace_10PX,
    color:colors.colorBlack,
  },
  backBtnStyle:{
    width: paddings.HSpace_18PX,
    height: paddings.HSpace_30PX,
    margin: paddings.HSpace_10PX,
  },
  headerBtnStyle:{
    width: paddings.HSpace_30PX,
    height: paddings.HSpace_30PX,
    margin: paddings.HSpace_10PX,
  },
  productDetailTextLbl: {
    fontSize: fontSizes.Font_w14,
    color: colors.colorWhite,
    alignSelf:'center',
    textAlign:'center',
    textAlignVertical:'center'
  },
  productDetailTextLblExt: {
    fontSize: fontSizes.Font_w12,
    color: colors.colorRed
  },
  productDetailMainTags:{
    flexDirection:'row', 
    marginTop: paddings.VSpace_10PX,
    marginHorizontal: paddings.HSpace_10PX
  },
  productDetailImageWH:{
    height: paddings.VSpace_30_PER, 
    width: paddings.HSpace_70_PER
  },
  headerTitle:{
    color:'white', 
    alignSelf:'center', 
    fontSize: fontSizes.Font_w16
  },
  lineThrough: {
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  }
});

export default CommonStyle;