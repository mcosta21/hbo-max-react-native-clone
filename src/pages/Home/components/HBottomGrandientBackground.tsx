import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import theme from '../../../styles/styles';

interface Props {
  children: ReactNode;
}

export function HBottomGradientBackground({ children }: Props) {
  return (
    <LinearGradient
        colors={[
          'transparent',
          theme.colors.black_0,
        ]}
        style={{ 
          height: '80%', 
          paddingBottom: 30, 
          alignItems: 'center', 
          justifyContent: 'flex-end' 
        }}
    >
      {children}
    </LinearGradient>
  );
};