import React from "react";
import { Text } from "react-native";
import { HBody } from "../../components/HBody";
import { DrawerContentComponentProps } from '@react-navigation/drawer';

interface Props extends DrawerContentComponentProps {
}


export function SearchPage({ navigation }: Props) {

    
    function openSidebar() {
        navigation.openDrawer();
    }

    return (
        <HBody openSidebar={openSidebar} useSafeAreaHeader style={{ flex: 1, height: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff'}}>Search</Text>
        </HBody>
    )
}