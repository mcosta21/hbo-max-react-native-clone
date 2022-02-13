import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const SDotsContainer = styled.View`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin-top: 10px;
   margin-bottom: 10px;
`

export const SDot = styled(Animated.View)`
    width: 16px;
    height: 16px;
    background: ${theme.colors.white};
    margin: 5px;
    border-bottom-end-radius: 10px;
    border-top-end-radius: 10px;
    border-bottom-start-radius: 10px;
    border-top-start-radius: 10px;
`