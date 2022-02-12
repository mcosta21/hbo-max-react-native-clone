import React, { ReactNode, useEffect } from 'react';
import { Text, View } from 'react-native';

import { RouterKey } from '../../routes/routes';
import theme from '../../styles/styles';

import { Button, Container, LeftSide, Logo, RightSide, SContent } from './styles';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolateColors, useDerivedValue, interpolateColor } from 'react-native-reanimated';


interface Props {
  openSidebar: () => void;
  showBackgroundHeader: boolean;
}

export function BHeader({ 
    openSidebar, 
    showBackgroundHeader,
}: Props) {

  const backgroundHeaderProgress = useDerivedValue(() => {
    return withTiming(showBackgroundHeader ? 1 : 0, { duration: 1000 });
  });

  const headerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      backgroundHeaderProgress.value,
      [0, 1],
      ['transparent', theme.colors.black_2]
    );

    return {
      backgroundColor,
    };
  }); 

  return (
    <Container>
      <Animated.View style={[headerStyle]}>
        <SContent>
          <LeftSide>
            <Button>
              <Feather name="menu" size={26} color={theme.colors.white} onPress={() => openSidebar()} />
            </Button>
          </LeftSide>

          <Logo source={require("../../assets/logo.png")} resizeMode="contain" />

          <RightSide />
        </SContent>
      </Animated.View>
    </Container>
  );
};

