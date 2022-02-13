import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const STitle = styled.Text`
    color: ${theme.colors.white};
    margin-left: 6px;
    margin-top: 6px;
    max-width: 160px;
    font-size: 12px;
`

export const SImage = styled.ImageBackground`
    height: 230px;
    width: 160px;
    margin-horizontal: 6px;
`

export const SPosition = styled.View`
    background-color: ${theme.colors.gray};
    margin: 5px;
    opacity: 0.8;
    border-bottom-end-radius: 3px;
    border-top-end-radius: 3px;
    border-bottom-start-radius: 3px;
    border-top-start-radius: 3px;
    align-items: center;
`

export const STextPosition = styled.Text`
    color: ${theme.colors.black_0};
    font-weight: 700;
    font-size: 13px;
    padding-horizontal: 3px;
`