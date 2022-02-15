import { HPrimaryButton } from "components/HPrimaryButton";
import { TouchableOpacity, View } from "react-native";
import { IItemData } from "../IItemData";
import { SButtonContainer, SImage, SSubtitleList, STitle } from "./styles";

interface Props extends IItemData {
    subtitle?: string;
    textAlign?: 'left' | 'center';
}

export function HHighlightItem({
    id,
    image,
    title,
    subtitle,
    textAlign = 'center',
    onPress
}: Props){

    const safeTitle = !!title && title.length > 25 ? `${title.substring(0, 25)}...` : title;
    const safeSubtitle = !!subtitle && subtitle.length > 100 ? `${subtitle.substring(0, 100)}...` : subtitle;

    return (
        <TouchableOpacity onPress={() => !!onPress && onPress(id)}>
            <View style={{ paddingVertical: 30 }}>
                <SImage source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} />
                {
                    !!title && <STitle style={{ textAlign: textAlign }}>{safeTitle}</STitle>
                }
                { !!subtitle && <SSubtitleList style={{ textAlign: textAlign }}>{safeSubtitle}</SSubtitleList>}
                <SButtonContainer>
                    <HPrimaryButton title="Explore hub" width={180} />
                </SButtonContainer>
            </View>
        </TouchableOpacity>
    )
}