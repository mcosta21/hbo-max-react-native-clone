import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const SContainer = styled.View`
    margin-left: 12px;
    margin-bottom: 28px;
`;

export const STitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 4px;
    padding-right: 12px;
`;

export const STitleList = styled.Text`
    color: ${theme.colors.white};
    width: 100%;
    font-size: 18px; 
    margin-left: 6px; 
    font-weight: 700;
`;

export const SSubtitleContainer = styled.View`
    margin-bottom: 4px;
    padding-right: 12px;
`;

export const SSubtitleList = styled.Text`
    color: ${theme.colors.white};
    font-size: 13px; 
    font-weight: 400;
    margin-left: 6px; 
    width: 100%;
    opacity: 0.8;
`;

