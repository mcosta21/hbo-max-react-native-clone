import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import theme from '../../../styles/styles';

interface Props {
    children: ReactNode;
}

export function HExtraContext({ children }: Props){
    return (
        <LinearGradient
            colors={[
                theme.colors.black_0,
                'transparent',
            ]}
            style={{ flex: 1, paddingTop: 15 }}
        >
                {children}
        </LinearGradient>
    )
}