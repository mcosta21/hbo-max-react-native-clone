import React, { ReactNode, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native'
import { HBody } from 'components/HBody';
import { useUser } from 'hooks/useUser';
import { RouterKey } from '../../routes/routes';
import { Container } from './styles';
import { StackHeaderProps } from '@react-navigation/stack';
import { HGradientBackground } from 'components/HGradientBackground';

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
        <Container>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={{ backgroundColor: '#fff', height: 60 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{ backgroundColor: '#fff', height: 60 }}
          />
          <Button title="Entrar" onPress={() => handleSignIn(username, password)}>
          </Button >

        </Container>
    </HGradientBackground>
    
  );
};

