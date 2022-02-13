import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { HBody } from "components/HBody";
import { HSimpleList } from "components/HSimpleList";
import { useUser } from "hooks/useUser";
import { getMovies } from "services/themoviedb/movie.api";
import { Movie } from "types/movie.type";
import { PageableTheMovieDb } from "types/pageable.type";
import { HHighlightPanel } from "./components/HHighlightPanel";


interface Props extends DrawerContentComponentProps {
}

export function HomePage({ navigation }: Props) {

    const { user } = useUser();
    const [movies, setMovies] = useState<PageableTheMovieDb<Movie>>(new PageableTheMovieDb());

    function openSidebar() {
        console.log('open sidebar')
        navigation.openDrawer();
    }

    useEffect(() => {
        getMoviesData();
    }, []);
    
    async function getMoviesData() {
        const data = await getMovies();
        setMovies(data);
    }

    return (
        <HBody openSidebar={openSidebar}>
            <HHighlightPanel>
                <HSimpleList
                    title="Just For You"
                    items={movies.results}
                    renderItem={({item}) => (
                        <View key={item.id}>
                            <Image 
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
                                style={{ width: 220, height: 140, marginHorizontal: 6 }}
                            />
                        </View>
                    )}
                />
            </HHighlightPanel>
           

            <HSimpleList
                title="Just For You"
                items={movies?.results || []}
                renderItem={({item}) => (
                    <View key={item.id}>
                        <Image 
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
                            style={{ width: 200, height: 120, marginHorizontal: 6 }}
                        />
                    </View>
                )}
            />

            <HSimpleList
                title="Just For You"
                items={movies?.results || []}
                renderItem={({item}) => (
                    <View key={item.id}>
                        <Image 
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
                            style={{ width: 200, height: 120, marginHorizontal: 6 }}
                        />
                    </View>
                )}
            />

            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>
            <Text style={{ color: '#fff', fontSize: 22 }}>HOME</Text>

                
        </HBody>
    )
}