import styled from 'styled-components/native';
import theme from '../../styles/styles';

export const Container = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    
    width: 100%;
    height: 94px;

    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 16px;

    position: absolute;
    z-index: 1;

`;

export const LeftSide = styled.View`
`;

export const RightSide = styled.View`
    min-width: 26px;
`;

export const Button = styled.TouchableOpacity`
`

export const Logo = styled.Image`
    width: 110px;
    height: 28px;
`
