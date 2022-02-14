import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { HBody } from "components/HBody";
import { HSimpleList } from "components/HSimpleList";
import { getIconicMovies, getMovies, getMoviesByKeywords, getPopularMovies } from "services/themoviedb/movie.api";
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
import { TVShow } from 'types/tvshow.type';
import { getPopularTVShows, getTvShowsByKeywords } from 'services/themoviedb/tvshow.api';

interface Props extends DrawerContentComponentProps {
}

export function HomePage({ navigation }: Props) {

    const [movies, setMovies] = useState<PageableTheMovieDb<Movie>>(new PageableTheMovieDb());
    const [popularMoviesTvShows, setPopularMoviesTvShows] = useState<Array<Movie | TVShow>>([]);
    const [iconicMovies, setIconicMovies] = useState<Array<Movie>>([]);
    const [dcMoviesTvShows, setDcMoviesTvShows] = useState<Array<Movie | TVShow>>([]);
    const [highlightMovie, setHighlightMovie] = useState<Movie>()

    function openSidebar() {
        navigation.openDrawer();
    }

    useEffect(() => {
        getMoviesData();
        getIconicMoviesData();
        getPopularMoviesTvShowsData();
        getDcMoviesTvShowsData();
    }, []);
    
    async function getMoviesData() {
        const data = await getMovies();
        setMovies(data);
    }

    async function getPopularMoviesTvShowsData() {
        const moviesData = (await getPopularMovies()).results;
        const tvShowsData = (await getPopularTVShows()).results.slice(0, 5);

        const items = [...moviesData.slice(0, 5), ...tvShowsData].sort((a, b) => (a.vote_average > b.vote_average) ? 1 : -1);
        
        setPopularMoviesTvShows(items);
        setHighlightMovie(moviesData[Math.floor(Math.random() * items.length)]);
    }

    async function getIconicMoviesData() {
        const data = (await getIconicMovies()).results;
        setIconicMovies(data);
    }

    async function getDcMoviesTvShowsData() {
        const keys = ['dc', 'dc comics', 'dc extended universe', 'dceu'];
        const moviesData = (await getMoviesByKeywords(keys)).results.slice(0, 5);
        const tvShowsData = (await getTvShowsByKeywords(keys)).results.slice(0, 5);
        const data = [...moviesData, ...tvShowsData].sort(() => Math.random() - 0.5);
        setDcMoviesTvShows(data);
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
                items={iconicMovies}
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
                items={popularMoviesTvShows}
                renderItem={({item, index}) => (
                    <HPortraitItem 
                        key={item.id} 
                        image={item.poster_path}
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
           
            {
               !!highlightMovie && (
                    <HHighlightItem 
                        title={highlightMovie.title}
                        subtitle={highlightMovie.overview}
                        image={highlightMovie.backdrop_path}
                    />
               )
            }

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
                title="The Ultimate Streaming Home of the DC Universe"
                items={dcMoviesTvShows}
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