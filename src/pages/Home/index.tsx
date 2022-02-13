import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { HBody } from "components/HBody";
import { HSimpleList } from "components/HSimpleList";
import { getMovies } from "services/themoviedb/movie.api";
import { Movie } from "types/movie.type";
import { PageableTheMovieDb } from "types/pageable.type";
import { HHighlightPanel } from "./components/HHighlightPanel";
import { HLoading } from 'components/HLoading';
import { Feather } from '@expo/vector-icons';
import theme from 'styles/GlobalStyles';
import { HLandscapeItem } from 'components/Items/HLandscapeItem';
import { HLongLandscapeItem } from 'components/Items/HLongLandscapeItem';
import { HPortraitItem } from 'components/Items/HPortraitItem';
import { HSquareItem } from 'components/Items/HSquareItem';
import { HLongPortraitItem } from 'components/Items/HLongPortraitItem';
import { HHighlightItem } from 'components/Items/HHighlightItem';

interface Props extends DrawerContentComponentProps {
}

export function HomePage({ navigation }: Props) {

    const [movies, setMovies] = useState<PageableTheMovieDb<Movie>>(new PageableTheMovieDb());

    function openSidebar() {
        navigation.openDrawer();
    }

    useEffect(() => {
        getMoviesData();
    }, []);
    
    async function getMoviesData() {
        const data = await getMovies();
        setMovies(data);
    }

    function handleMyList(){
        console.log('navigate to my list')
    }

    if(movies.results.length === 0) {
        return <HLoading />
    }

    return (
        <HBody openSidebar={openSidebar}>
            <HHighlightPanel>
                <HSimpleList
                    title="Just For You"
                    items={movies.results}
                    renderItem={({ item }) => (
                        <HLandscapeItem 
                            key={item.id} 
                            image={item.backdrop_path}
                        />
                    )}
                />
            </HHighlightPanel>

            <HSimpleList
                title="Iconic and Unmissible"
                subtitle="You love them, we love them, and the hits just keep on coming"
                items={movies.results}
                renderItem={({item}) => (
                    <HPortraitItem 
                        key={item.id} 
                        image={item.poster_path}
                    />
                )}
            />

            <HSimpleList
                title="MyList"
                items={movies.results}
                onPressTitle={handleMyList}
                renderIconTitle={<Feather name="chevron-right" size={16} color={theme.colors.white} />}
                renderItem={({item}) => (
                    <HSquareItem 
                        key={item.id} 
                        image={item.backdrop_path}
                        title={item.title}
                    />
                )}
            />

            <HSimpleList
                title="What the World Is Talking About"
                items={movies.results}
                onPressTitle={handleMyList}
                renderIconTitle={<Feather name="chevron-right" size={16} color={theme.colors.white} />}
                renderItem={({item}) => (
                    <HLongLandscapeItem 
                        key={item.id} 
                        image={item.backdrop_path}
                        title={item.title}
                    />
                )}
            />

            <HSimpleList
                title="Watched to the MAX"
                subtitle="Our TOP 10 movies and series that are trending in your country this week."
                textAlign="center"
                items={movies.results}
                renderItem={({item, index}) => (
                    <HPortraitItem 
                        key={item.id} 
                        image={item.backdrop_path}
                        title={index % 2 === 0 ? 'HBO' : undefined}
                        position={index + 1}
                    />
                )}
            />

            <HSimpleList
                title="HBO Max Hubs"
                items={movies.results}
                onPressTitle={handleMyList}
                renderIconTitle={<Feather name="chevron-right" size={16} color={theme.colors.white} />}
                renderItem={({item}) => (
                    <HLongPortraitItem 
                        key={item.id} 
                        image={item.backdrop_path}
                    />
                )}
            />
           
            <HHighlightItem 
                title={movies.results[4].title}
                subtitle={movies.results[4].overview}
                image={movies.results[4].backdrop_path}
            />

            <HSimpleList
                title="Iconic Collections"
                items={movies.results}
                renderItem={({ item }) => (
                    <HLandscapeItem 
                        key={item.id} 
                        image={item.backdrop_path}
                    />
                )}
            />

            <HSimpleList
                title="Anime + Adult Swim"
                subtitle="Cartoons worth 'tooning' into."
                textAlign="center"
                items={movies.results}
                renderItem={({ item }) => (
                    <HPortraitItem 
                        key={item.id} 
                        image={item.poster_path}
                    />
                )}
            />
                
        </HBody>
    )
}