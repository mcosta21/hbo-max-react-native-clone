import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const SContent = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const STitle = styled.Text`
    color: ${theme.colors.white};
    width: 100%;
    font-size: 16px; 
    padding-top: 14px;
    padding-left: 24px; 
    padding-bottom: 16px;
    font-weight: 700;
`;
