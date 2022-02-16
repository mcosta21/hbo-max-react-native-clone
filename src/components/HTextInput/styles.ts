import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';


export const STextInputContainer = styled.View`
    background-color: ${theme.colors.gray_normal};
    flex: 1;
    height: 45px;
    flex-direction: row;
    align-items: center;
    
    border-bottom-end-radius: 4px;
    border-top-end-radius: 4px;
    border-bottom-start-radius: 4px;
    border-top-start-radius: 4px;
    padding-horizontal: 12px;
    
`

export const STextInput = styled.TextInput`
    color: ${theme.colors.gray};
    flex: 1;
    height: 100%;
    font-size: 15px;
    opacity: 0.5;
`;

export const SIconInput = styled.View`
    margin-right: 8px;
    opacity: 0.8;
`;