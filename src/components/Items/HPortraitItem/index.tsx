import { View, Text } from "react-native";
import { SImage, SPosition, STextPosition, STitle } from "./styles";

interface Props {
    image: string;
    title?: string;
    position?: number;
}

export function HPortraitItem({
    image,
    title,
    position
}: Props){

    const safeTitle = !!title && title.length > 20 ? `${title.substring(0, 20)}...` : title

    return (
        <View style={{paddingBottom: !!title ? 10 : 0 }}>
            <SImage source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}>
                {
                    !!position && (
                        <SPosition style={{ width: position > 9 ? 32 : 24 }}>
                            <STextPosition>
                                {'#' + position}
                            </STextPosition>
                        </SPosition>
                    )
                }
            </SImage>
            {
                !!title && <STitle>{safeTitle}</STitle>
            }
        </View>
    )
}