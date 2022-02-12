import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import theme from '../../../styles/styles';

export function HTopGradientBackground() {
  return (
    <LinearGradient
        colors={[theme.colors.black_2, 'transparent']}
        style={{
            height: '20%'
        }} 
    />
  );
};