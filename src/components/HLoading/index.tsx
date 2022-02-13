import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";
import theme from 'styles/GlobalStyles';
import { SLogo, SSpacing } from "./styles";
import { HLoadingDots } from "components/HLoadingDots";

export function HLoading(){
    return (
        <LinearGradient
            colors={[
                theme.colors.pink,
                theme.colors.purple_dark,
                theme.colors.purple_normal,
            ]}
            style={{ 
                flex: 1,
                alignItems: 'center', 
                justifyContent: 'flex-end' 
            }}
        >
            <SLogo source={require("assets/logo-secundary.png")} resizeMode="contain" />
            <SSpacing>
                <HLoadingDots />
            </SSpacing>
        </LinearGradient>
    )
}