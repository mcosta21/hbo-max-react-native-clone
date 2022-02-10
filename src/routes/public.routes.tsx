import React from 'react';

import { TabRoutes } from './tab.routes';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInPage } from '../pages/SignIn';
import { PrivateRoutes } from './private.routes';

const { Navigator, Screen } = createStackNavigator();

const tabBarOptions = {
  headerShown: false,
}

export function PublicRoutes() {
    return (
      <Navigator screenOptions={tabBarOptions} initialRouteName="SignIn">
        <Screen name="SignIn"  component={SignInPage} />
        <Screen name="Logged"  component={PrivateRoutes} />
      </Navigator>
    )
}

