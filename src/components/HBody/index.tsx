import { useIsFocused, useNavigation, useNavigationState } from '@react-navigation/native';
import { HGradientBackground } from 'components/HGradientBackground';
import { useTabNavigation } from 'hooks/useTabNavigation';
import React, { MutableRefObject, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Platform, ScrollView, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { HHeader } from '../HHeader';
import { HContent, HScrollArea } from './styles';

interface Props extends ViewProps {
  children: ReactNode;
  openSidebar?: () => void;
  goBack?: () => void;
  useSafeAreaHeader?: boolean;
  showHeader?: boolean;
  customHeaderContent?: JSX.Element;
  title?: string;
}

export function HBody({ 
  children, 
  openSidebar, 
  goBack,
  useSafeAreaHeader = false,
  showHeader = true,
  customHeaderContent,
  title,
  ...rest
}: Props) {

  const navigation = useNavigation();
  const { currentTabIndex, previousTabIndex } = useTabNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  
  const offset = useSharedValue(0);
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  useEffect(() => {
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: false });
      if(previousTabIndex >= currentTabIndex) {
          offset.value = -400;
          offset.value = withTiming(0, { duration: 500 });
      }    
        else {
          offset.value = 400;
          offset.value = withTiming(0, { duration: 500 });
      }
  }, [navigation.getState()]);

  const [showBackgroundAndTextHeader, setShowBackgroundAndTextHeader] = useState(false);
  
  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    if(scrollPosition > 400) {
      setShowBackgroundAndTextHeader(true);
    }
    else {    
      setShowBackgroundAndTextHeader(false);
    }

  }

  function getTop(){
    return Platform.OS === 'ios' ? 104 : 84;
  }

  return (
      <HGradientBackground>
        <Animated.View style={[{ flex: 1 }, animatedStyles]}>
          {
            showHeader && (
              <HHeader 
                openSidebar={openSidebar} 
                goBack={goBack} 
                title={title}
                showBackgroundAndTextHeader={showBackgroundAndTextHeader} 
                customContent={customHeaderContent}
              />
            )
          }
          <ScrollView 
            ref={scrollViewRef}
            scrollEventThrottle={16} 
            onScroll={handleScroll}
            style={{ flex: 1 }}
          >
            <HContent style={{ paddingTop: useSafeAreaHeader ? getTop() : 0 }}>
                { children }
            </HContent>
          </ScrollView>
          
        </Animated.View>
      </HGradientBackground>
  );
};

