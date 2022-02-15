import { Feather, Foundation, Ionicons } from '@expo/vector-icons';
import { HBody } from 'components/HBody';
import { HBottomGradientBackground } from 'components/HBottomGrandientBackground';
import { HTopGrandientBackground } from 'components/HTopGrandientBackground';
import { useEffect, useState } from 'react';
import { getMovieById, getPopularMovies } from 'services/themoviedb/movie.api';
import { SAdultBadge, SBannerItem, SButtonsContainer, SCircle, SContentItem, SImageBackground, SItemInfo, SMoreOptions, SNormalBadge, SSubtitle, STitle, STitleBadge } from './styles';
import theme from 'styles/GlobalStyles';
import { TVShow } from 'types/tvshow.type';
import { Movie } from 'types/movie.type';
import { getPopularTVShows, getTvShowById } from 'services/themoviedb/tvshow.api';
import { HSimpleList } from 'components/HSimpleList';
import { HPortraitItem } from 'components/Items/HPortraitItem';
import { RouterKey } from 'routes/routes-keys';
import { useNavigation } from '@react-navigation/native';

interface Props {
    route: {
        params: {
            id: number;
            type: 'movie' | 'tv';
        }
    };
}

export function DetailItem({ route }: Props){

    const { id, type } = route.params;

    const navigation = useNavigation();

    const [item, setItem] = useState<Movie | TVShow>();
    const [moreItems, setMoreItems] = useState<Array<Movie | TVShow>>([]);

    useEffect(() => {
        getItemDetailData();
        getPopularMoviesOrTvShowsData();
    }, [id, type]);

    async function getItemDetailData(){
        const data = await (type === 'movie' ? getMovieById(id) : (getTvShowById(id)));
        setItem(data);
    }

    function getImage(){

        if(!item) return {};

        return {
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
        }
    }

    function handleGoBack(){
        navigation.goBack();
    }

    function getReleaseYear(){
        return !!item && item.release_date ? new Date(item.release_date).getFullYear() : '';
    }

    function getRunTime() {

        if(!item || !item.runtime) {
            return '';
        }

        var hour = Math.floor(item.runtime % 3600 / 60);
        var minutes = Math.floor(item.runtime % 3600 % 60);
    
        var hourDisplay = hour > 0 ? hour + ' HR' : '';
        var minutesDisplay = minutes > 0 ? minutes + ' MIN' : '';
        return `${hourDisplay} ${minutesDisplay}`;
    }

    function getTitle() {
        return (item as Movie)?.title || (item as TVShow)?.name;
    }
    
    function handleChangeDetailItem(id: number, type: string){
        navigation.navigate(RouterKey.DetailItemPage as never, { id, type } as never);
    }

    async function getPopularMoviesOrTvShowsData() {
        const data = await (type === 'movie' ? getPopularMovies() : getPopularTVShows());
        const items = data.results;
        setMoreItems(items);
    }

    return (
        <HBody goBack={handleGoBack} title={getTitle()}>
            <SBannerItem>
                <SImageBackground source={getImage()}>
                    <HBottomGradientBackground height={100}>
                        
                        <SButtonsContainer>

                            <SCircle>
                                <Foundation name="play" size={30} color={theme.colors.white} />
                            </SCircle>

                            <SMoreOptions>
                                <Feather name="plus" size={25} color={theme.colors.white} style={{ marginRight: 40 }} />
                                <Feather name="download" size={25} color={theme.colors.white} />
                            </SMoreOptions>

                        </SButtonsContainer>
                        
                    </HBottomGradientBackground>
                </SImageBackground>
                <HTopGrandientBackground>

                    <SContentItem>

                        <STitle>{getTitle()}</STitle>

                        <SItemInfo>
                            {!!item?.runtime && <SSubtitle>{getRunTime()}</SSubtitle>}

                            {
                                !!item && item.adult ? (
                                    <SAdultBadge>
                                        <STitleBadge>18</STitleBadge>
                                    </SAdultBadge>
                                ) : (
                                    <SNormalBadge>
                                        <STitleBadge>16</STitleBadge>
                                    </SNormalBadge>
                                )
                            }
                            
                            {!!item?.release_date && <SSubtitle>{getReleaseYear()}</SSubtitle>}
                            <SSubtitle>HD</SSubtitle>
                            <SSubtitle>5.1</SSubtitle>
                        </SItemInfo>

                        <SSubtitle style={{ marginTop: 10 }}>{item?.overview}</SSubtitle>

                    </SContentItem>

                    <HSimpleList
                        title="More Like This"
                        items={moreItems}
                        renderItem={({ item }) => (
                            <HPortraitItem 
                                id={item.id} 
                                image={item.poster_path}
                                onPress={(id: number) => handleChangeDetailItem(id, type)}
                            />
                        )}
                    />     

                </HTopGrandientBackground>
            </SBannerItem>
            
        </HBody>
    )
}