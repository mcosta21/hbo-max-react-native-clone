import { View, Text, TouchableOpacity } from "react-native";
import { IItemData } from "../IItemData";
import { SImage, SPosition, STextPosition, STitle } from "./styles";

interface Props extends IItemData{
    position?: number;
}

export function HPortraitItem({
    id,
    image,
    title,
    position,
    onPress
}: Props){

    const safeTitle = !!title && title.length > 20 ? `${title.substring(0, 20)}...` : title

    return (
        <TouchableOpacity onPress={() => !!onPress && onPress(id)}>
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
        </TouchableOpacity>
    )
}