import React, { ReactNode, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native'
import { HBody } from 'components/HBody';
import { useUser } from 'hooks/useUser';
import { RouterKey } from '../../routes/routes-keys';
import { SContent } from './styles';
import { StackHeaderProps } from '@react-navigation/stack';
import { HGradientBackground } from 'components/HGradientBackground';
import { HPrimaryButton } from 'components/HPrimaryButton';

interface Props extends StackHeaderProps {
  children: ReactNode;
}

export function SignInPage({ children, navigation }: Props) {

  const { login } = useUser();

  const [username, setUsername] = useState('master@brothersinvest.com.br');
  const [password, setPassword] = useState('123456');

  async function handleSignIn(email: string, password: string) {
    try {
      // await login(email, password);
      navigation.navigate(RouterKey.PrivateRoutes);
    } catch (error) {
    }
  }

  return (
    <HGradientBackground>
        <SContent>
          <HPrimaryButton 
            title="SIGN IN" 
            width={300}
            onPress={() => handleSignIn(username, password)} 
          />
        </SContent>
    </HGradientBackground>
    
  );
};

