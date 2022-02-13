import { View } from "react-native";
import { SImage, STitle } from "./styles";

interface Props {
    image: string;
    title?: string;
}

export function HLongLandscapeItem({
    image,
    title
}: Props){
    return (
        <View style={{ paddingBottom: !!title ? 10 : 0 }}>
            <SImage source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} />
            {
                !!title && <STitle>{title}</STitle>
            }
        </View>
    )
}