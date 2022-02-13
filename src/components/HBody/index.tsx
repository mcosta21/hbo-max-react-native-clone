import { useIsFocused, useNavigation, useNavigationState } from '@react-navigation/native';
import { HGradientBackground } from 'components/HGradientBackground';
import { useTabNavigation } from 'hooks/useTabNavigation';
import React, { ReactNode, useEffect, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Platform, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { HHeader } from '../HHeader';
import { HContent, HScrollArea } from './styles';

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

  const navigation = useNavigation();
  const { currentTabIndex, previousTabIndex } = useTabNavigation();

  const offset = useSharedValue(400);
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  useEffect(() => {
      if(previousTabIndex >= currentTabIndex) {
          offset.value = 400;
          offset.value = withTiming(0, { duration: 500 });
      }    
        else {
          offset.value = -400;
          offset.value = withTiming(0, { duration: 500 });
      }
  }, [navigation.getState()]);

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
      <HGradientBackground>
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
      </HGradientBackground>
  );
};

