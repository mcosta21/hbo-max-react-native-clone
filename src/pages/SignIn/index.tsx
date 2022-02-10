import React, { ReactNode, useState } from 'react';
import { Button, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useUser } from '../../hooks/useUser';
import { RouterKey } from '../../routes/routes';
import { Container } from './styles';

interface SignInProps {
  children: ReactNode;
  navigation: any;
}

export function SignInPage({ children, navigation }: SignInProps) {

  const { login } = useUser();

  const [username, setUsername] = useState('master@brothersinvest.com.br');
  const [password, setPassword] = useState('123456');

  async function handleSignIn(email: string, password: string) {
    try {
      // await login(email, password);
      navigation.navigate('Logged');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => handleSignIn(username, password)} />
    </Container>
  );
};

