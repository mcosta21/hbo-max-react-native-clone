import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const SContainer = styled.View`
    width: 100%;
    height: ${Platform.OS === 'ios' ? 104 : 84}px;

    position: absolute;
    z-index: 1;
`;

export const SContent = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    height: 100%;
    width: 100%;

    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 16px;
`

export const SLeftSide = styled.View`
`;

export const SRightSide = styled.View`
    min-width: 26px;
`;

export const SLogo = styled.Image`
    width: 110px;
    height: 24px;
`
