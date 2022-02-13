import { StackHeaderProps } from '@react-navigation/stack';
import { HGradientBackground } from 'components/HGradientBackground';
import { HLoading } from 'components/HLoading';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { RouterKey } from '../../routes/routes';
import { Container } from './styles';

interface Props extends StackHeaderProps {
}

export function SignOutPage({ navigation }: Props) {

  useEffect(() => {
    // DO LOGOUT
    /*
    setTimeout(() => {
      navigation.navigate(RouterKey.SignInPage);
    }, 1500);
    */
  }, []);


  /*
      <HGradientBackground>
          <Container>
            <Text>
              Loading logout
            </Text>
          </Container>
      </HGradientBackground>
      
        */

  return (
    <HLoading />
  );
};

