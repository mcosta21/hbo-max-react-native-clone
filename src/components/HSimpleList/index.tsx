import React from "react";
import { View, FlatList, ListRenderItem } from "react-native";
import { SContainer, SSubtitleList, STitleContainer, STitleList } from "./styles";

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
                    </STitleList>
                    {renderIconTitle}
                </STitleContainer>
            )}
            { !!subtitle && (
                <SSubtitleList 
                    style={{ 
                        textAlign, 
                        paddingRight: textAlign === 'left' ? 30 : 38,
                        paddingLeft: textAlign === 'center' ? 30 : 0
                    }}
                >
                    {subtitle}
                </SSubtitleList>
            )}
            <FlatList
                style={{ marginTop: 8 }}
                data={items}
                renderItem={renderItem}
                keyExtractor={(key, index) => index.toString()}
                horizontal
            />
        </SContainer>
    )
}