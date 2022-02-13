import { HPrimaryButton } from "components/HPrimaryButton";
import { View } from "react-native";
import { SButtonContainer, SImage, SSubtitleList, STitle } from "./styles";

interface Props {
    image: string;
    title?: string;
    subtitle?: string;
    textAlign?: 'left' | 'center';
}

export function HHighlightItem({
    image,
    title,
    subtitle,
    textAlign = 'center'
}: Props){

    const safeTitle = !!title && title.length > 25 ? `${title.substring(0, 25)}...` : title;
    const safeSubtitle = !!subtitle && subtitle.length > 100 ? `${subtitle.substring(0, 100)}...` : subtitle;

    return (
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
    )
}