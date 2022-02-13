import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const STouchableOpacity = styled.TouchableOpacity`
    height: 40px;
    background-color: red;
    border-bottom-end-radius: 30px;
    border-top-end-radius: 30px;
    border-bottom-start-radius: 30px;
    border-top-start-radius: 30px;
    overflow: hidden;
`

export const SLinearGradient = styled(LinearGradient).attrs({
    colors: [
        theme.colors.purple_dark,
        theme.colors.purple_normal,
    ],
    start: {x: 0, y: 0.75},
    end: {x: 1, y: 0.25},
})`
    height: 100%;
    align-items: center;
    justify-content: center;
`;


export const SText = styled.Text`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
`
