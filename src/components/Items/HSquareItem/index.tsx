import { Button, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IItemData } from "../IItemData";
import { SImage, STitle } from "./styles";

export function HSquareItem({
    id,
    image,
    title,
    onPress
}: IItemData){

    const safeTitle = !!title && title.length > 35 ? `${title.substring(0, 35)}...` : title

    return (
        <TouchableOpacity onPress={() => !!onPress && onPress(id)}>
            <View style={{paddingBottom: !!title ? 10 : 0 }} >
                <SImage source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} />
                {
                    !!title && <STitle>{safeTitle}</STitle>
                }
            </View>
        </TouchableOpacity>
    )
}