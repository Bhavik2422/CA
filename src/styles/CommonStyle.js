import {StyleSheet, Platform} from 'react-native';
import { borderRadius, colors, fontSizes, opacity, paddings } from '../utils/theme';

/**
 * This is common Styles files includes screen/component/view styles.
 * You can reuse mentioned styles in any screen using this file.
 * 
 * @returns {Object} JSON Objext of all Styles with key-value pair
 */
const CommonStyle = StyleSheet.create({
  safeAreaViewStyle:{
    flex:1,
    backgroundColor: colors.colorBGMain
  },
  splashMainView:{
    backgroundColor:colors.colorNavBar, 
    justifyContent:'center'
  },
  splashWelcomeText:{
    alignSelf:'center', 
    fontSize: fontSizes.Font_w16, 
    fontWeight: 'bold', 
    color: colors.colorWhite,
  },
  splashVersionText:{
    backgroundColor: colors.colorNavBar, 
    textAlign:'center' ,
    fontSize: fontSizes.Font_w12, 
    fontWeight: 'bold', 
    color: colors.colorWhite
  },
  bottomBarMainViewShadow:{
    flexDirection:'row', 
    backgroundColor:colors.colorWhite, 
    borderTopColor: colors.colorTextInActive.concat(opacity.OP_50),
    borderTopWidth: paddings.HSpace_1PX
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
    width: paddings.HSpace_90PX,
    height: paddings.HSpace_90PX,
    borderRadius: borderRadius.BR_10,
  },
  productItemSpace: {
    flexDirection:'row',
    marginHorizontal: paddings.HSpace_15PX, 
    marginTop: paddings.HSpace_15PX,
    backgroundColor:colors.colorWhite,
    borderRadius: borderRadius.BR_10,
    padding: paddings.HSpace_10PX,
    borderWidth: paddings.HSpace_1PX,
    borderColor: colors.colorTextInActive.concat(opacity.OP_80)
  },
  productItemText:{
    fontSize: fontSizes.Font_w14,
    color: colors.colorNavBar,
    fontWeight: 'bold',
    marginStart: paddings.HSpace_10PX,
    flex:1
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
    marginHorizontal: paddings.HSpace_15PX,
  },
  searchInputLabel:{
    alignSelf:'flex-start',
    fontSize: fontSizes.Font_w14,
    fontWeight:'700',
    color: colors.colorBlack,
    marginBottom: paddings.HSpace_5PX,
    textAlign:'center',
    textAlignVertical:'center',
  },
  searchInputView:{
    borderWidth: paddings.HSpace_1PX,
    borderRadius: paddings.HSpace_10PX,
    borderColor: colors.colorTextInActive,
    backgroundColor:colors.colorWhite,
    paddingHorizontal: paddings.HSpace_10PX,
    color:colors.colorBlack,
  },
  backBtnStyle:{
    width: paddings.HSpace_12PX,
    height: paddings.HSpace_20PX,
    margin: paddings.HSpace_15PX,
  },
  headerMain:{
    backgroundColor:colors.colorNavBar,
    justifyContent:'center',
  },
  headerBtnStyle:{
    width: paddings.HSpace_20PX,
    height: paddings.HSpace_20PX,
    margin: paddings.HSpace_15PX,
  },
  productDetailTextLbl: {
    fontSize: fontSizes.Font_w15,
    color: colors.colorNavBar,
    marginHorizontal: paddings.HSpace_5PX,
    alignSelf:'center',
    textAlign:'left',
    textAlignVertical:'center',
  },
  productDetailTextLblExt: {
    fontSize: fontSizes.Font_w12,
    color: colors.colorBlack
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
    color:colors.colorWhite, 
    alignSelf:'center', 
    fontSize: fontSizes.Font_w16,
    fontWeight:'bold',
  },
  lineThrough: {
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },
  bgLoaderMain: {
      position:"absolute", 
      top:0, 
      left:0,
      right:0, 
      bottom:0,
  },
  customLoaderParent:{
    width: paddings.HSpace_85_PER,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf:'center',
  },
  loaderCircleStyle:{
    width:paddings.Padding_w30,
    height:paddings.Padding_w30,
    alignSelf:'center',
    justifyContent:'center',
  },
  loaderCircleInnerStyle:{
    width:paddings.Padding_w20,
    height:paddings.Padding_w20,
    alignSelf:'center',
  },
  rightSideBorder:{
    borderRightWidth:paddings.HSpace_1PX, 
    borderRightColor: colors.colorTextInActive
  },
  customBtnMain:{
    justifyContent:'center',
    backgroundColor:colors.colorNavBar, 
    borderRadius: borderRadius.BR_10, 
    marginTop: paddings.VSpace_10PX, 
    borderColor:colors.colorTextInActive, 
    borderWidth: paddings.HSpace_1PX,
  },
  customBtnText:{
    alignSelf:'center',
    fontSize: fontSizes.Font_w14, 
    fontWeight:'500', 
    color: colors.colorWhite, 
    marginHorizontal: paddings.HSpace_10PX, 
    marginVertical: paddings.VSpace_10PX
  },
});

export default CommonStyle;