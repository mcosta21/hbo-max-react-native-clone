import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { RouterKey } from '../../routes/routes';
import theme from '../../styles/styles';

import { Button, Container, LeftSide, Logo, RightSide } from './styles';
import { Feather } from '@expo/vector-icons';

interface Props {
  openSidebar: () => void;
  showBackgroundHeader: boolean;
}

export function BHeader({ 
    openSidebar, 
    showBackgroundHeader,
}: Props) {

  return (
    <Container style={{ backgroundColor: showBackgroundHeader ? theme.colors.white : 'transparent' }}>
      <LeftSide>
        <Button>
          <Feather name="menu" size={26} color={theme.colors.white} onPress={() => openSidebar()} />
        </Button>
      </LeftSide>

      <Logo source={require("../../assets/logo.png")} resizeMode="contain" />

      <RightSide />
    </Container>
  );
};

