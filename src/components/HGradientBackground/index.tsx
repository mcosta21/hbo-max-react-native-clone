import React, { ReactNode } from "react";
import { SImageBackground } from "./styles";

interface Props {
    children?: ReactNode;
};

export function HGradientBackground({ children }: Props){
    return (
        <SImageBackground source={require('assets/background.jpg')} resizeMode="cover">
            {children}
        </SImageBackground>
    )
}