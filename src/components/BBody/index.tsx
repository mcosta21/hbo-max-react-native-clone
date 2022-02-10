import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode, useState } from 'react';
import { Text, Image, ImageBackground, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { BHeader } from '../BHeader';
import { HScrollArea, SImageBackground, HContent } from './styles';

interface Props {
  children: ReactNode;
  openSidebar: () => void;
  useSafeAreaHeader?: boolean;
}

export function BBody({ 
  children, 
  openSidebar, 
  useSafeAreaHeader = false 
}: Props) {

  const [showBackgroundHeader, setShowBackgroundHeader] = useState(false);
  
  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    if(scrollPosition > 200) {
      setShowBackgroundHeader(true);
    }
    else {    
      setShowBackgroundHeader(false);
    }

  }

  return (
      <SImageBackground source={require('../../assets/background.jpg')} resizeMode="cover">
        <BHeader openSidebar={openSidebar} showBackgroundHeader={showBackgroundHeader} />
        <HScrollArea onScroll={handleScroll}>
          <HContent style={{ top: useSafeAreaHeader ? 94 : 0 }}>
            { children }
          </HContent>
        </HScrollArea>
      </SImageBackground>
  );
};

