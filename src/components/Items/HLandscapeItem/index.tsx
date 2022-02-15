import { TouchableOpacity, View } from "react-native";
import { IItemData } from "../IItemData";
import { SImage, STitle } from "./styles";

export function HLandscapeItem({
    id,
    image,
    title,
    onPress
}: IItemData){

    const safeTitle = !!title && title.length > 25 ? `${title.substring(0, 25)}...` : title

    return (
        <TouchableOpacity onPress={() => !!onPress && onPress(id)}>
            <View style={{ paddingBottom: !!title ? 10 : 0 }}>
                <SImage source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} />
                {
                    !!title && <STitle>{safeTitle}</STitle>
                }
            </View>
        </TouchableOpacity>
    )
}