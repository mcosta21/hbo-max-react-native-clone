import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { HBody } from "../../components/HBody";
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { HTextInput } from "components/HTextInput";
import { SContent, STitle } from "./styles";
import { PageableTheMovieDb } from "types/global.type";
import { Movie } from "types/movie.type";
import { getMovies } from "services/themoviedb/movie.api";
import { HPortraitItem } from "components/Items/HPortraitItem";
import { RouterKey } from "routes/routes-keys";

interface Props extends DrawerContentComponentProps {
}


export function SearchPage({ navigation }: Props) {

    const [movies, setMovies] = useState<PageableTheMovieDb<Movie>>(new PageableTheMovieDb());

    const [textSearch, setTextSearch] = useState<string>();
    
    function openSidebar() {
        navigation.openDrawer();
    }

    function onChangeTextSearch(text: string){
        console.log(text);
    }

    useEffect(() => {
        getMoviesData();
    }, [textSearch]);

    async function getMoviesData() {
        const data = await getMovies();
        setMovies(data);
    }

    function handleShowDetailItem(id: number, type: 'movie' | 'tv' = 'movie'){
        navigation.navigate(RouterKey.DetailItemPage, { id, type });
    }

    return (
        <HBody 
            openSidebar={openSidebar} 
            useSafeAreaHeader 
            customHeaderContent={
                <HTextInput
                    value={textSearch}
                    onChangeText={onChangeTextSearch}
                    placeholder="What are you looking for?"
                />}    
        >
            <SContent>
                <STitle>HBO Recommends</STitle>
                {
                    movies.results.map(x => (
                        <View key={x.id} style={{ paddingBottom: 26 }}>
                            <HPortraitItem 
                                id={x.id}
                                image={x.poster_path}
                                onPress={handleShowDetailItem}
                            />
                        </View>
                        
                    ))
                }

            </SContent>
        </HBody>
    )
}