import { Platform } from 'react-native';
import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';
import Animated from 'react-native-reanimated';
import Constants from 'expo-constants';

export const SContainer = styled.View`
    width: 100%;
    height: ${Platform.OS === 'ios' ? 104 : 84}px;

    position: absolute;
    z-index: 100;
`;

export const SContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: 100%;

    padding-right: 20px;
    padding-left: 20px;
    padding-top: ${Constants.statusBarHeight + 'px'};
`

export const SCenter = styled.View`
   flex: 1;
   height: 100%;
`;

export const SLeftSide = styled.View`
    min-width: 26px;
`;

export const SRightSide = styled.View`
    min-width: 26px;
`;

export const SLogo = styled.Image`
    width: 110px;
    height: 24px;
`

export const STitle = styled(Animated.Text)`
    color: ${theme.colors.white};
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    text-align: left;
    padding-left: 10px;
`
