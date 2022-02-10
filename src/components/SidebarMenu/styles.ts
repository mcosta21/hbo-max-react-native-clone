import Constants from 'expo-constants';
import styled from 'styled-components/native';
import theme from '../../styles/styles';

export const SContainer = styled.SafeAreaView`
    background: ${theme.colors.black_0};
    flex: 1;
`;

export const Header = styled.View`
    padding-top: ${Constants.statusBarHeight + 'px'};
    height: 200px;
    background: ${theme.colors.gray};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray_dark};
`

export const Options = styled.View`
    background: ${theme.colors.white};
`

export const SItem = styled.TouchableOpacity