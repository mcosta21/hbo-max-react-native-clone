import Constants from 'expo-constants';
import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const SContainer = styled.SafeAreaView`
    padding-top: ${Constants.statusBarHeight + 4 + 'px'};
    background: ${theme.colors.black_0};
    flex: 1;
`;
