import { useEffect } from "react";
import { ViewProps } from "react-native";
import { Easing, useAnimatedStyle, useSharedValue, withTiming, interpolate, withRepeat, withDelay, withSequence } from "react-native-reanimated";
import { SDot, SDotsContainer } from "./styles";

interface Props extends ViewProps {
}

export function HLoadingDots({ ...rest }: Props){

    const opacityDot1 = useSharedValue(0.1);
    const opacityDot2 = useSharedValue(0.1);
    const opacityDot3 = useSharedValue(0.1);

    const animatedDot1 = useAnimatedStyle(() => {
        return { opacity: opacityDot1.value };
    });

    const animatedDot2 = useAnimatedStyle(() => {
        return { opacity: opacityDot2.value };
    });

    const animatedDot3 = useAnimatedStyle(() => {
        return { opacity: opacityDot3.value };
    });

    useEffect(() => {
        opacityDot1.value = applyEffect(100);
        opacityDot2.value = applyEffect(200);
        opacityDot3.value = applyEffect(300);
    }, []);

    return (
        <SDotsContainer {...rest}>
            <SDot style={[animatedDot1]} />
            <SDot style={[animatedDot2]} />
            <SDot style={[animatedDot3]} />
        </SDotsContainer>
    )
}

function applyEffect(delay: number) {
    return withRepeat(
        withDelay(delay, 
            withSequence(
                withTiming(1, { duration: 1000 }),
                withTiming(0.1, { duration: 1000 })
            )
        ),
        -1,
        false,
    );
}
