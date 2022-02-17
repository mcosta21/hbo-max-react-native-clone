import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export function HHeaderAccount(){
    return (
        <SHeaderAccountContainer>
            <TouchableOpacity>
                <Ionicons name="ios-settings-outline" size={24} color={theme.colors.white} />
            </TouchableOpacity>
            <SAccountContainer>

                <SPicture source={{ uri: 'https://avatars.githubusercontent.com/u/30120305?s=400&u=2c33a6777ec253d664a59108230924e555c89070&v=4' }} />
                
            </SAccountContainer>
            <SSpacing />
        </SHeaderAccountContainer>
    )
}

const SHeaderAccountContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

const SAccountContainer = styled.View`
    flex: 1;
    align-items: center;
`

const SSpacing = styled.View`
    min-width: 35px;
`

const SPicture = styled.ImageBackground`
    width: 40px;
    height: 40px;

    border-bottom-end-radius: 20px;
    border-top-end-radius: 20px;
    border-bottom-start-radius: 20px;
    border-top-start-radius: 20px;
    overflow: hidden;

    border: 2px solid ${theme.colors.purple_normal};
`