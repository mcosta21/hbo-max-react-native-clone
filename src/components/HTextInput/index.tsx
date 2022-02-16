import { TextInputProps } from "react-native";
import { SIconInput, STextInput, STextInputContainer } from "./styles";
import theme from 'styles/GlobalStyles';
import { Feather } from "@expo/vector-icons";

interface Props extends TextInputProps {
    showIcon?: boolean;
}

export function HTextInput({ showIcon = true ,...rest }: Props){
    return (
        <STextInputContainer>
            
            { showIcon && (
                <SIconInput>
                    <Feather 
                        name="search" 
                        size={22} 
                        color={theme.colors.gray}
                    />
                </SIconInput>
            )}

            <STextInput
                {...rest}
                placeholderTextColor={theme.colors.gray}
            />

        </STextInputContainer>
    )
}