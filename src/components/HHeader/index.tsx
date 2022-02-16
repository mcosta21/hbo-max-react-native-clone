import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import theme from 'styles/GlobalStyles';
import { SContainer, SContent, SLeftSide, SLogo, SRightSide, STitle } from './styles';

interface Props {
  openSidebar?: () => void;
  goBack?: () => void;
  showBackgroundAndTextHeader: boolean;
  title?: string;
  customContent?: JSX.Element;
}

export function HHeader({ 
    openSidebar, 
    goBack,
    title,
    showBackgroundAndTextHeader,
    customContent,
}: Props) {

  const animationHeaderProgress = useDerivedValue(() => {
    return withTiming(showBackgroundAndTextHeader ? 1 : 0, { duration: 1000 });
  });

  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationHeaderProgress.value,
      [0, 1],
      ['transparent', theme.colors.black_2]
    );

    return {
      backgroundColor,
    };
  }); 

  const colorStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      animationHeaderProgress.value,
      [0, 1],
      ['transparent', theme.colors.white]
    );

    return {
      color
    };
  }); 

  return (
    <SContainer>
      <Animated.View style={[backgroundStyle]}>
        <SContent>

          {
            !!customContent && (customContent)
          }

          {
            !customContent && (
              <>
                <SLeftSide>
                  {
                    !!openSidebar && (
                      <TouchableOpacity onPress={() => openSidebar()}>
                        <Feather name="menu" size={26} color={theme.colors.white} />
                      </TouchableOpacity>
                    )
                  }
                  
                  {
                    !!goBack && (
                      <TouchableOpacity onPress={() => goBack()} >
                        <Feather name="chevron-left" size={26} color={theme.colors.white} />
                      </TouchableOpacity>
                    )
                  }
                </SLeftSide>

                {
                  !!title ? (
                    <STitle style={[colorStyle]}>{title.length > 40 ? `${title.substring(0, 40)}...` : title}</STitle>
                  ) : (
                    <SLogo source={require("assets/logo.png")} resizeMode="contain" />
                  )
                }

                <SRightSide />
              </>
            )
          }
          
        </SContent>
      </Animated.View>
    </SContainer>
  );
};

