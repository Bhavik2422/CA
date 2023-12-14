/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
  BackHandler,
  SafeAreaView,
  Text,
} from 'react-native';
import CommonString from './src/styles/CommonString';
import { colors } from './src/utils/theme';
import Constants from './src/utils/Constants';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import DashboardNavTab from './src/screens/DashboardTab/DashbaordTabNav';
import ProductDetail from './src/screens/ProductDetail/ProductDetail';
import AddProduct from './src/screens/AddProduct/AddProduct';




const App = () => {
  
  const Stack = createStackNavigator();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)

    return () => {
      backHandler.remove()
    }
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        key={CommonString.KEY_ROOT_NAVIGATION}
        initialRouteName={CommonString.SPLASH_SCREEN}
        // screenOptions={{ gestureEnabled: false, animationEnabled: false }}
      >
          
        <Stack.Screen
          name={CommonString.SPLASH_SCREEN}
          component={SplashScreen}
          options={{
            headerShown: Constants.IS_HEADER_SHOWN,
            title: CommonString.GENERAL_TITLE,
            headerStyle: {
              backgroundColor: colors.colorRed,
            },
            headerTintColor: colors.colorWhite,
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
            },
            headerLeft: () => <Text style={{ color: colors.colorRed }}>{'DUMMY'}</Text>,
            headerRight: () => <Text style={{ color: colors.colorRed }}> {'DUMMY'} </Text>,
          }}
        />

        <Stack.Screen
          name={CommonString.DASHBOARD_TAB_NAV}
          component={DashboardNavTab}
          options={{
            headerShown: Constants.IS_HEADER_SHOWN,
            title: CommonString.GENERAL_TITLE,
            headerStyle: {
              backgroundColor: colors.colorRed,
            },
            headerTintColor: colors.colorWhite,
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
            },
            headerLeft: () => <Text style={{ color: colors.colorRed }}>{'DUMMY'}</Text>,
            headerRight: () => <Text style={{ color: colors.colorRed }}>{'DUMMY'}</Text>,
          }}
        />

        <Stack.Screen
          name={CommonString.PRODUCT_DETAIL}
          component={ProductDetail}
          options={{
            headerShown: Constants.IS_HEADER_SHOWN,
            title: CommonString.GENERAL_TITLE,
            headerStyle: {
              backgroundColor: colors.colorRed,
            },
            headerTintColor: colors.colorWhite,
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
            },
            headerLeft: () => <Text style={{ color: colors.colorRed }}>{'DUMMY'}</Text>,
            headerRight: () => <Text style={{ color: colors.colorRed }}> {'DUMMY'} </Text>,
          }}
        />

        <Stack.Screen
          name={CommonString.ADD_PRODUCT}
          component={AddProduct}
          options={{
            headerShown: Constants.IS_HEADER_SHOWN,
            title: CommonString.GENERAL_TITLE,
            headerStyle: {
              backgroundColor: colors.colorRed,
            },
            headerTintColor: colors.colorWhite,
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
            },
            headerLeft: () => <Text style={{ color: colors.colorRed }}>{'DUMMY'}</Text>,
            headerRight: () => <Text style={{ color: colors.colorRed }}> {'DUMMY'} </Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
