import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, Button } from 'react-native';
import CommonString from '../../styles/CommonString';
import { colors } from '../../utils/theme';
import Constants from '../../utils/Constants';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import AccountPage from '../AccountPage/AccountPage';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

/**
 * This is home navigator used and combined to stack navigator to provide tabular navigation
 * 
 * @param {route} Object Used to detect routes and passed parameters
 * @param {navigation} Object Used for navigation through pages 
 * 
 * @returns Tab navigator for Tabluar navigation
 */
const DashboardNavTab = ({route, navigation}) => {

    /**
     * Includes tab navigation screens component
     */
    return(
        <Tab.Navigator
            key={CommonString.DASHBOARD_TAB_NAV_KEY}
            initialRouteName={CommonString.HOME_SCREEN}
            tabBar={props => <CustomTabBar {...props} />}
        >

            <Tab.Screen
                name={CommonString.HOME_SCREEN}
                component={HomePage}
                options={{
                    headerShown: Constants.IS_HEADER_SHOWN,
                    title: "CommonString.DEMO_STR",
                    headerStyle: {
                        backgroundColor: colors.colorRed,
                    },
                    headerTintColor: colors.colorWhite,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    },
                    headerLeft: () => (<Text style={{ color: colors.colorRed }}>Hi</Text>),
                    headerRight: () => (<Text style={{ color: colors.colorRed }}>Hi</Text>),
                }}
            />

            <Tab.Screen
                name={CommonString.SEARCH_SCREEN}
                component={SearchPage}
                options={{
                    headerShown: Constants.IS_HEADER_SHOWN,
                    title: "CommonString.DEMO_STR",
                    headerStyle: {
                        backgroundColor: colors.colorRed,
                    },
                    headerTintColor: colors.colorWhite,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    },
                    headerLeft: () => (<Text style={{ color: colors.colorRed }}>Hi</Text>),
                    headerRight: () => (<Text style={{ color: colors.colorRed }}>Hi</Text>),
                }}
            />

            <Tab.Screen
                name={CommonString.ACCOUNT_SCREEN}
                component={AccountPage}
                options={{
                    headerShown: Constants.IS_HEADER_SHOWN,
                    title: "CommonString.DEMO_STR",
                    headerStyle: {
                        backgroundColor: colors.colorRed,
                    },
                    headerTintColor: colors.colorWhite,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    },
                    headerLeft: () => (<Text style={{ color: colors.colorRed }}>Hi</Text>),
                    headerRight: () => (<Text style={{ color: colors.colorRed }}>Hi</Text>),
                }}
            />

        </Tab.Navigator>
    );

}

export default DashboardNavTab;