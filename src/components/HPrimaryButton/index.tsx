import { TouchableOpacityProps } from "react-native";
import { SLinearGradient, SText, STouchableOpacity } from "./styles";

interface Props extends TouchableOpacityProps {
    width?: number;
    title: string;
}

export function HPrimaryButton({
    title,
    width = 200,
    ...rest
}: Props){
    return (
        <STouchableOpacity {...rest} style={{ width }}>
            <SLinearGradient>
                <SText>{title}</SText>
            </SLinearGradient>
        </STouchableOpacity>
    )
}