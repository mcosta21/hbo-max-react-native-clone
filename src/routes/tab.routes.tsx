import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import { AccountPage } from 'pages/Account';
import { HomePage } from 'pages/Home';
import { SearchPage } from 'pages/Search';
import theme from 'styles/GlobalStyles';
import { RouterKey } from './routes-keys';
import { useNavigation } from '@react-navigation/native';
import { useTabNavigation } from 'hooks/useTabNavigation';

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
};

const tabBarStyle = {
  height: Platform.OS === 'android' ? 64 : 94,
  backgroundColor: theme.colors.black_1,
  borderTopWidth: 1,
  borderTopColor: theme.colors.gray_dark,
};

export function TabRoutes() {

    const { currentTabIndex, setCurrentTab } = useTabNavigation();

    return (
      <Navigator 
        screenOptions={{ ...tabBarOptions, tabBarStyle }} 
        initialRouteName={RouterKey.HomePage}
      >
        <Screen 
          name={RouterKey.HomePage} 
          component={HomePage} 
          listeners={{
            tabPress: () => {
              setCurrentTab(0, currentTabIndex);
            },
          }}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons 
                  name="home-variant-outline" 
                  size={size} 
                  color={focused ? theme.colors.purple_normal : theme.colors.white }
                />
              );
            }
          }}
        />
        <Screen 
          name="Search" 
          component={SearchPage} 
          listeners={{
            tabPress: () => {
              setCurrentTab(1, currentTabIndex);
            },
          }}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Feather 
                  name="search" 
                  size={size - 2} 
                  color={focused ? theme.colors.purple_normal : theme.colors.white }
                />
              );
            }
          }}
        />
        <Screen 
          name="Account" 
          component={AccountPage} 
          listeners={{
            tabPress: () => {
              setCurrentTab(2, currentTabIndex);
            },
          }}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <AntDesign 
                  name="user" 
                  size={size - 3} 
                  color={focused ? theme.colors.purple_normal : theme.colors.white }
                />
              );
            }
          }}
        />
      </Navigator>
    )
}