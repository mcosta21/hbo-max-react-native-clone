import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import theme from 'styles/GlobalStyles';
import { SContainer, SContent, SLeftSide, SLogo, SRightSide } from './styles';




interface Props {
  openSidebar: () => void;
  showBackgroundHeader: boolean;
}

export function HHeader({ 
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
    <SContainer>
      <Animated.View style={[headerStyle]}>
        <SContent>
          <SLeftSide>
            <TouchableOpacity>
              <Feather name="menu" size={26} color={theme.colors.white} onPress={() => openSidebar()} />
            </TouchableOpacity>
          </SLeftSide>

          <SLogo source={require("assets/logo.png")} resizeMode="contain" />

          <SRightSide />
        </SContent>
      </Animated.View>
    </SContainer>
  );
};

