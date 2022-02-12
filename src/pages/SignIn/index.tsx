import React, { ReactNode, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BBody } from '../../components/BBody';
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
      navigation.navigate(RouterKey.PrivateRoutes);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <BBody useSafeAreaHeader>
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
          <View style={{ height: 100, backgroundColor: 'gray'}}>
            <Button title="Entrar" onPress={() => handleSignIn(username, password)}>
            </Button >
          </View>

        </Container>
    </BBody>
    
  );
};

