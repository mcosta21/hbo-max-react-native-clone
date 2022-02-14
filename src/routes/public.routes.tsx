import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { PrivateRoutes } from './private.routes';
import { RouterKey } from './routes-keys';
import { SignInPage } from 'pages/SignIn';
import { SignOutPage } from 'pages/SignOut';

const { Navigator, Screen } = createStackNavigator();

const tabBarOptions = {
  headerShown: false,
}

export function PublicRoutes() {
    return (
      <Navigator screenOptions={tabBarOptions} initialRouteName={RouterKey.SignInPage}>
        <Screen name={RouterKey.SignInPage}  component={SignInPage} />
        <Screen name={RouterKey.SignOutPage}  component={SignOutPage} />
        <Screen name={RouterKey.PrivateRoutes}  component={PrivateRoutes} />
      </Navigator>
    )
}

