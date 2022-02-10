import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouterKey } from './routes';
import { TabRoutes } from './tab.routes';
import { SidebarMenu } from '../components/SidebarMenu';
import { SettingsPage } from '../pages/Settings';


const { Navigator, Screen } = createDrawerNavigator();

const tabBarOptions = {
  headerShown: false,
}

export function PrivateRoutes() {
    return (
      <Navigator screenOptions={tabBarOptions} initialRouteName="Home" drawerContent={(props) => <SidebarMenu {...props} />}>
        <Screen name="Home" component={TabRoutes}/>
        <Screen name={RouterKey.Settings} component={SettingsPage} />
      </Navigator>
    )
}

