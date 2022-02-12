import React, { useEffect } from "react";
import { Button, Text } from "react-native";
import { HBody } from "../../components/HBody";
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import styles from "../../styles/styles";
import { useIsFocused } from "@react-navigation/native";

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