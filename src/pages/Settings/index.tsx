import { ReactNode } from 'react';
import { Text } from 'react-native'

import { Container } from './styles';

interface SettingsProps {
  children: ReactNode;
}

export function SettingsPage({ children }: SettingsProps) {
  return (
    <Container>
      <Text>Settings</Text>
      {children}
    </Container>
  );
};
