import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../styles/styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { AccountPage } from '../pages/Account';
import { HomePage } from '../pages/Home';

import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: 94,
    backgroundColor: theme.colors.black_1,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray_dark,
  },
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
    return (
      <Navigator screenOptions={tabBarOptions} initialRouteName="Home">
        <Screen name="Home"  component={HomePage} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <AntDesign 
                name="home" 
                size={size} 
                color={focused ? theme.colors.orange : theme.colors.blue }
              />
            );
          }
        }}/>
        <Screen name="Account" component={AccountPage} options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons 
                name="ios-settings-outline" 
                size={size} 
                color={focused ? theme.colors.orange : theme.colors.blue }
              />
            );
          }
        }}/>
      </Navigator>
    )
}