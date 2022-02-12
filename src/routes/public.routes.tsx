import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { PrivateRoutes } from './private.routes';
import { RouterKey } from './routes';
import { SignInPage } from 'pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

const tabBarOptions = {
  headerShown: false,
}

export function PublicRoutes() {
    return (
      <Navigator screenOptions={tabBarOptions} initialRouteName={RouterKey.SignInPage}>
        <Screen name={RouterKey.SignInPage}  component={SignInPage} />
        <Screen name={RouterKey.PrivateRoutes}  component={PrivateRoutes} />
      </Navigator>
    )
}

