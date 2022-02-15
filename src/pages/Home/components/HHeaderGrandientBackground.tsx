import { LinearGradient } from "expo-linear-gradient";
import theme from 'styles/GlobalStyles';

export function HHeaderGrandientBackground() {
  return (
    <LinearGradient
        colors={[theme.colors.black_2, 'transparent']}
        style={{
            height: '20%'
        }} 
    />
  );
};