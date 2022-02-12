import React from "react";
import { View, FlatList, ListRenderItem } from "react-native";
import { SContainer, STitleList } from "./styles";

interface Props {
    title?: string;
    items: Array<any>;
    renderItem: ListRenderItem<any> | null | undefined;
}

export function HSimpleList({
    title,
    items,
    renderItem,
}: Props){
    return (
        <SContainer>
            { !!title && <STitleList>{title}</STitleList>}
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(key, index) => index.toString()}
                horizontal
            />
        </SContainer>
    )
}