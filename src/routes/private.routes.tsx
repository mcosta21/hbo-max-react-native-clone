import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouterKey } from './routes-keys';
import { TabRoutes } from './tab.routes';
import { HSidebarMenu } from 'components/HSidebarMenu';
import { SettingsPage } from 'pages/Settings';
import { DetailItem } from 'pages/DetailItem';

const { Navigator, Screen } = createDrawerNavigator();

const tabBarOptions = {
  headerShown: false,
}

export function PrivateRoutes() {
    return (
      <Navigator 
        screenOptions={tabBarOptions} 
        initialRouteName={RouterKey.TabRoutes} 
        drawerContent={(props) => <HSidebarMenu {...props} />}
      >
        <Screen name={RouterKey.TabRoutes} component={TabRoutes}/>
        <Screen name={RouterKey.SettingsPage} component={SettingsPage} />
        <Screen name={RouterKey.DetailItemPage} component={DetailItem} />
      </Navigator>
    )
}

