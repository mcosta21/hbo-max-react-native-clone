import { StackHeaderProps } from '@react-navigation/stack';
import { HGradientBackground } from 'components/HGradientBackground';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { RouterKey } from '../../routes/routes-keys';
import { SContent } from './styles';

interface Props extends StackHeaderProps {
}

export function SignOutPage({ navigation }: Props) {

  useEffect(() => {
    // DO LOGOUT
    setTimeout(() => {
      navigation.navigate(RouterKey.SignInPage);
    }, 1500);
  }, []);


  return (
    <HGradientBackground>
        <SContent>
            <Text style={{ color: '#fff', fontSize: 20 }}>Logout...</Text>
        </SContent>
    </HGradientBackground>
  );
};

