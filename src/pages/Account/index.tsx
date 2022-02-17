import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from "react";
import { NativeScrollEvent, NativeSyntheticEvent, Text } from "react-native";
import { HBody } from "components/HBody";
import { HHeaderAccount } from './HHeaderAccount';
import { SContent } from './styles';

interface Props extends DrawerContentComponentProps {
}

export function AccountPage({ navigation }: Props) {
    
    function openSidebar() {
        navigation.openDrawer();
    }

    return (
        <HBody 
            useSafeAreaHeader 
            customHeaderContent={<HHeaderAccount />}
        >
            <SContent>
                <Text style={{ color: '#fff', fontSize: 20 }}>TODO</Text>
            </SContent>
        </HBody>
    )
}

