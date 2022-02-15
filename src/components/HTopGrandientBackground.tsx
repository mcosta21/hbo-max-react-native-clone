import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import theme from 'styles/GlobalStyles';

interface Props {
    children: ReactNode;
    height?: number;
}

export function HTopGrandientBackground({ children, height }: Props){
    return (
        <LinearGradient
            colors={[
                theme.colors.black_0,
                'transparent',
            ]}
            style={{ paddingTop: 15, height: !!height ? `${height}%` : '100%' }}
        >
                {children}
        </LinearGradient>
    )
}