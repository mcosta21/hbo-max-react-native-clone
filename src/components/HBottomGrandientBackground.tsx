import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import theme from 'styles/GlobalStyles';

interface Props {
  children: ReactNode;
  height?: number;
}

export function HBottomGradientBackground({ children, height = 80 }: Props) {
  return (
    <LinearGradient
        colors={[
          'transparent',
          theme.colors.black_0,
        ]}
        style={{ 
          height: `${height}%`, 
          paddingBottom: 30, 
          alignItems: 'center', 
          justifyContent: 'flex-end' 
        }}
    >
      {children}
    </LinearGradient>
  );
};