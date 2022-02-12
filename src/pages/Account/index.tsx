import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from "react";
import { Text } from "react-native";
import { HBody } from "components/HBody";

interface Props extends DrawerContentComponentProps {
}

export function AccountPage({ navigation }: Props) {
    
    function openSidebar() {
        navigation.openDrawer();
    }

    return (
        <HBody openSidebar={openSidebar} useSafeAreaHeader style={{ flex: 1, height: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff'}}>Account</Text>
        </HBody>
    )
}