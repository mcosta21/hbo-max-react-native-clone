import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../styles/styles';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { AccountPage } from '../pages/Account';
import { HomePage } from '../pages/Home';

import { Platform } from 'react-native';
import { RouterKey } from './routes';
import { SearchPage } from '../pages/Search';

const { Navigator, Screen } = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    flex: 0,
    width: 20,
    height: 20,
  },
}
export function TabRoutes() {

    const tabBarStyle = {
      height: Platform.OS === 'android' ? 64 : 94,
      backgroundColor: theme.colors.black_1,
      borderTopWidth: 1,
      borderTopColor: theme.colors.gray_dark,
    };

    return (
      <Navigator 
        screenOptions={{ ...tabBarOptions, tabBarStyle }} 
        initialRouteName={RouterKey.HomePage}
        >
        <Screen name={RouterKey.HomePage}  component={HomePage} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons 
                name="home-variant-outline" 
                size={size} 
                color={focused ? theme.colors.purple_normal : theme.colors.white }
              />
            );
          }
        }}/>
        <Screen name="Search" component={SearchPage} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Feather 
                name="search" 
                size={size - 2} 
                color={focused ? theme.colors.purple_normal : theme.colors.white }
              />
            );
          }
        }}/>
        <Screen name="Account" component={AccountPage} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <AntDesign 
                name="user" 
                size={size - 3} 
                color={focused ? theme.colors.purple_normal : theme.colors.white }
              />
            );
          }
        }}/>
      </Navigator>
    )
}