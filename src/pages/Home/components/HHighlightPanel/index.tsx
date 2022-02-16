import React, { ReactNode, useEffect, useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { getPopularMovies } from "services/themoviedb/movie.api";
import { getPopularTVShows } from "services/themoviedb/tvshow.api";
import { Movie } from "types/movie.type";
import { TVShow } from "types/tvshow.type";
import { HBottomGradientBackground } from "../../../../components/HBottomGrandientBackground";
import { HTopGrandientBackground } from "../../../../components/HTopGrandientBackground";
import { HHeaderGrandientBackground } from "../HHeaderGrandientBackground";
import { SContainer, SHighlightSubtitle, SHighlightTitle, SImageBackground } from "./styles";

interface Props {
    children: ReactNode;
    onPress?: (id: number, type?: 'movie' | 'tv') => void;
}

const highlightType = ['movie', 'tv'];

export function HHighlightPanel({ children, onPress }: Props){

    const [movie, setMovie] = useState<Movie>();
    const [tvShow, setTvShow] = useState<TVShow>();

    async function getPopularHighlightData(){
        const type = highlightType[Math.floor(Math.random() * highlightType.length)];
        const items = await (type === 'movie' ? getPopularMovies() : getPopularTVShows());

        const item = items.results[Math.floor(Math.random() * items.results.length)];
        
        if(type === 'movie') setMovie(item as Movie);
        else setTvShow(item as TVShow);
    }

    function getImage(){

        // Exibir imagem de carregando
        if(!movie && !tvShow) return {};

        return {
            uri: `https://image.tmdb.org/t/p/w500${!!movie ? movie.poster_path : tvShow?.poster_path}`
        }
        
    }

    function getOverview(){

        if(!!movie && movie.overview.length > 80) {
            return `${movie.overview.substring(0, 80)}...`
        }

        if(!!tvShow && tvShow.overview.length > 80) {
            return `${tvShow.overview.substring(0, 80)}...`
        }

        return '';
    }

    useEffect(() => {
        getPopularHighlightData();
    }, []);

    return (
        <SContainer>

            <TouchableHighlight onPress={() => !!onPress && onPress(!!movie ? movie.id : (!!tvShow ? tvShow.id : 0), !!movie ? 'movie' : 'tv')}>
                <SImageBackground source={getImage()}>
                    <HHeaderGrandientBackground />
                    <HBottomGradientBackground>

                        <SHighlightTitle>
                            {!!movie ? movie.title : tvShow?.name}
                        </SHighlightTitle>

                        <SHighlightSubtitle>
                            {getOverview()}
                        </SHighlightSubtitle>
                        
                    </HBottomGradientBackground>
                </SImageBackground>
            </TouchableHighlight>
            
            <HTopGrandientBackground>
                {children}
            </HTopGrandientBackground>
        </SContainer>
    )
}

