import { theMovieDbApi } from ".";
import { Movie } from "types/movie.type";
import { PageableTheMovieDb } from "types/global.type";

const root = '/discover/movie';

export async function getMovies(): Promise<PageableTheMovieDb<Movie>> {

    const params = {
        page: 1
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<Movie>>(root, { params });
    return response.data;
}

export async function getPopularMovies(page: number = 1): Promise<PageableTheMovieDb<Movie>> {

    const params = {
        sort_by: 'vote_average.desc',
        primary_release_year: 2022,
        page
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<Movie>>(root, { params });
    return response.data;
}

export async function getIconicMovies(page: number = 1): Promise<PageableTheMovieDb<Movie>> {

    const params = {
        sort_by: 'release_date.asc, popularity.desc',
        page
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<Movie>>(root, { params });
    return response.data;
}

export async function getMoviesByKeywords(keywords: Array<string>, page: number = 1): Promise<PageableTheMovieDb<Movie>> {

    const params = {
        with_keywords: keywords.join(','),
        page
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<Movie>>(root, { params });
    return response.data;
}

export async function getMovieById(id: number): Promise<Movie> {
    const response = await theMovieDbApi.get<Movie>(`/movie/${id}`);
    return response.data;
}