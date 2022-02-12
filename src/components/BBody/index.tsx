import { useIsFocused } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode, useEffect, useState } from 'react';
import { Text, Image, ImageBackground, NativeScrollEvent, NativeSyntheticEvent, ViewProps, View, Platform } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { HHeader } from '../HHeader';
import { HScrollArea, SImageBackground, HContent } from './styles';

interface Props extends ViewProps {
  children: ReactNode;
  openSidebar?: () => void;
  useSafeAreaHeader?: boolean;
}

export function BBody({ 
  children, 
  openSidebar, 
  useSafeAreaHeader = false,
  ...rest
}: Props) {

  const isFocused = useIsFocused();
  const offset = useSharedValue(255);
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  useEffect(() => {
      offset.value = withTiming(isFocused ? 0 : 255, { duration: 500 });
  }, [isFocused]);

  const [showBackgroundHeader, setShowBackgroundHeader] = useState(false);
  
  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    if(scrollPosition > 400) {
      setShowBackgroundHeader(true);
    }
    else {    
      setShowBackgroundHeader(false);
    }

  }

  function getTop(){
    return Platform.OS === 'ios' ? 104 : 84;
  }

  return (
      <SImageBackground source={require('../../assets/background.jpg')} resizeMode="cover">
        <Animated.View style={[{ flex: 1 }, animatedStyles]}>
          {
            !!openSidebar && (
              <HHeader openSidebar={openSidebar} showBackgroundHeader={showBackgroundHeader} />
            )
          }
          <HScrollArea 
            scrollEventThrottle={16} 
            onScroll={handleScroll}
          >
            <HContent style={{ top: useSafeAreaHeader ? getTop() : 0 }}>
                { children }
            </HContent>
          </HScrollArea>
          
        </Animated.View>
      </SImageBackground>
  );
};

