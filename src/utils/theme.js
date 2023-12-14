/**
 * 
 * width 390 (design view port size in XD)
 * height 844 (design view port size in XD)
 * 
 * For Font_w10, HSpace_10PX 
 * 390*?/100 = 10 ::> ? is 2.57
 * 
 * for VSpace_10PX
 * 844*?/100 = 10 ::> ? is 1.18
 */

import {Platform} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from './ResponsiveScreen';

const colors = {
  
    // Used color
    colorWhite: '#FFFFFF',
    colorRedError:'#fc6767',
    colorBlack: '#000000',
    colorRed: '#C41010',
    colorNavBar: '#033B77',
    colorShadow:'#1F1F14',
    colorTextInActive: '#999999',
    colorTextActive: '#2a6fb8',

};

const fontSizes = {

  Font_w8: wp(2.06),
  Font_w9: wp(2.31),
  Font_w10: wp(2.57),
  Font_w11: wp(2.82),
  Font_w12: wp(3.08),
  Font_w13: wp(3.34),
  Font_w14: wp(3.59),
  Font_w15: wp(3.85),
  Font_w16: wp(4.10),
  Font_w17: wp(4.36),
  Font_w18: wp(4.61),
  Font_w19: wp(4.87),
  Font_w20: wp(5.13),
  Font_w21: wp(5.38),
  Font_w22: wp(5.64),
  Font_w23: wp(5.90),
  Font_w24: wp(6.16),
  Font_w25: wp(6.41),
  Font_w32: wp(8.21),

};

const paddings = {

  HSpace_1PX: wp(0.26),
  HSpace_2PX: wp(0.52),
  HSpace_3PX: wp(0.77),
  HSpace_4PX: wp(1.02),
  HSpace_5PX: wp(1.28),
  HSpace_6PX: wp(1.54),
  HSpace_7PX: wp(1.79),
  HSpace_7_5PX: wp(1.92),
  HSpace_8PX: wp(2.05),
  HSpace_9PX: wp(2.31),
  HSpace_10PX: wp(2.57),
  HSpace_11PX: wp(2.82),
  HSpace_12PX: wp(3.08),
  HSpace_13PX: wp(3.33),
  HSpace_14PX: wp(3.59),
  HSpace_15PX: wp(3.85),
  HSpace_16PX: wp(4.10),
  HSpace_17PX: wp(4.36),
  HSpace_18PX: wp(4.61),
  HSpace_19PX: wp(4.87),
  HSpace_20PX: wp(5.13),
  HSpace_21PX: wp(5.38),
  HSpace_22PX: wp(5.64),
  HSpace_23PX: wp(5.90),
  HSpace_24PX: wp(6.16),
  HSpace_25PX: wp(6.41),
  HSpace_30PX: wp(7.69),
  HSpace_40PX: wp(10.26),
  HSpace_50PX: wp(12.82),
  HSpace_70PX: wp(17.95),
  HSpace_80PX: wp(20.52),
  HSpace_90PX: wp(23.08),
  HSpace_100PX: wp(25.64),
  HSpace_10_PER: wp(10),
  HSpace_20_PER: wp(20),
  HSpace_22_PER: wp(22),
  HSpace_25_PER: wp(25),
  HSpace_30_PER: wp(30),
  HSpace_40_PER: wp(40),
  HSpace_45_PER: wp(45),
  HSpace_50_PER: wp(50),
  HSpace_60_PER: wp(60),
  HSpace_70_PER: wp(70),
  HSpace_75_PER: wp(75),
  HSpace_85_PER: wp(85),
  HSpace_90_PER: wp(90),
  HSpace_91_PER: wp(91),
  HSpace_92_7_PER: wp(92.7),
  HSpace_95_PER: wp(95),
  HSpace_100_PER: wp(100),

  VSpace_1PX: hp(0.12),
  VSpace_2PX: hp(0.24),
  VSpace_3PX: hp(0.35),
  VSpace_4PX: hp(0.47),
  VSpace_5PX: hp(0.59),
  VSpace_6PX: hp(0.71),
  VSpace_7PX: hp(0.83),
  VSpace_8PX: hp(0.95),
  VSpace_9PX: hp(1.07),
  VSpace_10PX: hp(1.18),
  VSpace_11PX: hp(1.30),
  VSpace_12PX: hp(1.42),
  VSpace_13PX: hp(1.54),
  VSpace_14PX: hp(1.66),
  VSpace_15PX: hp(1.78),
  VSpace_16PX: hp(1.90),
  VSpace_17PX: hp(2.02),
  VSpace_18PX: hp(2.13),
  VSpace_19PX: hp(2.25),
  VSpace_20PX: hp(2.37),
  VSpace_21PX: hp(2.49),
  VSpace_22PX: hp(2.61),
  VSpace_23PX: hp(2.73),
  VSpace_24PX: hp(2.84),
  VSpace_25PX: hp(2.96),
  VSpace_30PX: hp(3.55),
  VSpace_35PX: hp(4.15),
  VSpace_45PX: hp(5.33),
  VSpace_50PX: hp(5.92),
  VSpace_60PX: hp(7.11),
  VSpace_75PX: hp(8.88),
  VSpace_100PX: hp(11.85),
  VSpace_3_PER: hp(3),
  VSpace_30_PER: hp(30),
  VSpace_40_PER: hp(40),
  VSpace_50_PER: hp(50),
  VSpace_60_PER: hp(60),
  VSpace_70_PER: hp(70),
  VSpace_75_PER: hp(75),
  VSpace_100_PER: hp(100),
  
};

const fontFace = {
//   OS_BOLD: 'OpenSans-Bold',
};

const opacity = {
  OP_00 : '0',
  OP_10 : '10',
  OP_15 : '15',
  OP_20 : '20',
  OP_35 : '35',
  OP_40 : '40',
  OP_41 : '41',
  OP_50 : '50',
  OP_80 : '80',

  PP_0_0 : 0.0,
  PP_0_1 : 0.1,
  PP_0_41 : 0.41,
  PP_0_5 : 0.5,
  PP_1_0 : 1.0,
  PP_1_0 : 1.0,

};

const borderRadius = {
  BR_1: 1,
  BR_2: 2,
  BR_3: 3,
  BR_4: 4,
  BR_5: 5,
  BR_6: 6,
  BR_7: 7,
  BR_8: 8,
  BR_9: 9,
  BR_10: 10,
  BR_11: 11,
  BR_12: 12,
  BR_13: 13,
  BR_14: 14,
  BR_15: 15,
  BR_16: 16,
  BR_17: 17,
  BR_18: 18,
  BR_19: 19,
  BR_20: 20,
  BR_21: 21,
  BR_22: 22,
  BR_23: 23,
  BR_24: 24,
  BR_25: 25,
  BR_26: 26,
  BR_27: 27,
  BR_28: 28,
  BR_29: 29,
  BR_30: 30,
  BR_31: 31,
  BR_32: 32,
  BR_33: 33,
  BR_34: 34,
  BR_35: 35,
  BR_36: 36,
  BR_37: 37,
  BR_38: 38,
  BR_39: 39,
  BR_40: 40,
  BR_41: 41,
  BR_42: 42,
  BR_43: 43,
  BR_44: 44,
  BR_45: 45,
  BR_46: 46,
  BR_47: 47,
  BR_48: 48,
  BR_49: 49,
  BR_50: 50,
  BR_100: 100,

}

export {colors, fontSizes, fontFace, paddings, opacity, borderRadius};
