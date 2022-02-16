import React from "react";
import { View, FlatList, ListRenderItem } from "react-native";
import { SContainer, SSubtitleContainer, SSubtitleList, STitleContainer, STitleList } from "./styles";

interface Props {
    title?: string;
    subtitle?: string;
    items: Array<any>;
    renderItem: ListRenderItem<any> | null | undefined;
    onPressTitle?: () => void;
    renderIconTitle?: JSX.Element;
    textAlign?: 'left' | 'center';
}

export function HSimpleList({
    title,
    subtitle,
    items,
    renderItem,
    renderIconTitle,
    onPressTitle,
    textAlign = 'left'
}: Props){
    return (
        <SContainer>
            { !!title && (
                <STitleContainer>
                    <STitleList onPress={onPressTitle} style={{ textAlign }}>
                        {title}
                        <View style={{ paddingLeft: 6 }}>{renderIconTitle}</View>
                    </STitleList>
                </STitleContainer>
            )}
            { !!subtitle && (
                <SSubtitleContainer>
                    <SSubtitleList style={{ textAlign, paddingHorizontal: textAlign === 'center' ? 32 : 0 }}>
                        {subtitle}
                    </SSubtitleList>
                </SSubtitleContainer>
            )}
            <FlatList
                style={{ marginTop: 8 }}
                showsHorizontalScrollIndicator={false}
                data={items}
                renderItem={renderItem}
                keyExtractor={(key, index) => index.toString()}
                horizontal
            />
        </SContainer>
    )
}