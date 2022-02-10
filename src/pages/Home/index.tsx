import React from "react";
import { Text, View } from "react-native";
import { BBody } from "../../components/BBody";
import { useUser } from "../../hooks/useUser";
import { DrawerContentComponentProps } from '@react-navigation/drawer';

interface Props extends DrawerContentComponentProps {
}

export function HomePage({ navigation }: Props) {

    const { user } = useUser();

    function openSidebar() {
        navigation.openDrawer();
    }
    
    return (
        <BBody openSidebar={openSidebar}>
            <View style={{ backgroundColor: '#526366', height: 560 }}></View>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text style={{ color: '#fff', fontSize: 40}}>Home</Text>
            <Text>{user?.username}</Text>
        </BBody>
    )
}