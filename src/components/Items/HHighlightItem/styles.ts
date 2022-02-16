import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const STextContainer = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 4px;
`;

export const STitle = styled.Text`
    color: ${theme.colors.white};
    margin-vertical: 6px;
    font-size: 20px; 
    font-weight: 700;
    width: 100%;
`

export const SSubtitleList = styled.Text`
    color: ${theme.colors.white};
    font-size: 13px; 
    margin-bottom: 4px;
    font-weight: 400;
    width: 100%;
    padding-horizontal: 20px;
    opacity: 0.8;
`;

export const SImage = styled.Image`
    width: 100%;
    height: 230px;
`

export const SButtonContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 10px;
`

