import { theMovieDbApi } from ".";
import { PageableTheMovieDb } from 'types/pageable.type';
import { TVShow } from "types/tvshow.type";

const root = '/discover/tv';

export async function getMovies(): Promise<PageableTheMovieDb<TVShow>> {

    const params = {
        api_key: 'b9183c5c2d36811f09ae74cc21f99e94',
        with_watch_providers: 384,
        watch_region: 'BR',
        page: 1
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<TVShow>>(root, { params });
    return response.data;
}

export async function getPopularTVShows(): Promise<PageableTheMovieDb<TVShow>> {

    const params = {
        api_key: 'b9183c5c2d36811f09ae74cc21f99e94',
        with_watch_providers: 384,
        watch_region: 'BR',
        sort_by: 'realease_date.desc',
        primary_release_year: 2022,
        page: 1
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<TVShow>>(root, { params });
    return response.data;
}
