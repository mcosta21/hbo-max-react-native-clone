import { useIsFocused } from '@react-navigation/native';
import React, { ReactNode, useEffect, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Platform, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { HHeader } from '../HHeader';
import { HContent, HScrollArea, SImageBackground } from './styles';

interface Props extends ViewProps {
  children: ReactNode;
  openSidebar?: () => void;
  useSafeAreaHeader?: boolean;
}

export function HBody({ 
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

