import { theMovieDbApi } from ".";
import { PageableTheMovieDb } from 'types/global.type';
import { TVShow } from "types/tvshow.type";

const root = '/discover/tv';

export async function getTvShows(): Promise<PageableTheMovieDb<TVShow>> {

    const params = {
        page: 1
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<TVShow>>(root, { params });
    return response.data;
}

export async function getPopularTVShows(page: number = 1): Promise<PageableTheMovieDb<TVShow>> {

    const params = {
        sort_by: 'vote_average.desc',
        primary_release_year: 2022,
        page
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<TVShow>>(root, { params });
    return response.data;
}

export async function getTvShowsByKeywords(keywords: Array<string>, page: number = 1): Promise<PageableTheMovieDb<TVShow>> {

    const params = {
        with_keywords: keywords.join(','),
        page
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<TVShow>>(root, { params });
    return response.data;
}

export async function getTvShowById(id: number): Promise<TVShow> {
    const response = await theMovieDbApi.get<TVShow>(`/tv/${id}`);
    return response.data;
}