import React from "react";
import { Text } from "react-native";
import { BBody } from "../../components/BBody";
import { DrawerContentComponentProps } from '@react-navigation/drawer';

interface Props extends DrawerContentComponentProps {
}


export function SearchPage({ navigation }: Props) {

    
    function openSidebar() {
        navigation.openDrawer();
    }

    return (
        <BBody openSidebar={openSidebar} useSafeAreaHeader style={{ flex: 1, height: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff'}}>Search</Text>
        </BBody>
    )
}