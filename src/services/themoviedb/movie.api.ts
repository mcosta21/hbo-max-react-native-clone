import { theMovieDbApi } from ".";
import { Movie } from "types/movie.type";
import { PageableTheMovieDb } from "types/pageable.type";

const root = '/discover/movie';

export async function getMovies(): Promise<PageableTheMovieDb<Movie>> {

    const params = {
        api_key: 'b9183c5c2d36811f09ae74cc21f99e94',
        language: 'pt-BR',
        with_watch_providers: 384,
        watch_region: 'BR',
        page: 1
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<Movie>>(root, { params });
    return response.data;
}

export async function getPopularMovies(): Promise<PageableTheMovieDb<Movie>> {

    const params = {
        api_key: 'b9183c5c2d36811f09ae74cc21f99e94',
        language: 'pt-BR',
        with_watch_providers: 384,
        watch_region: 'BR',
        sort_by: 'realease_date.desc',
        primary_release_year: 2022,
        page: 1
    };

    const response = await theMovieDbApi.get<PageableTheMovieDb<Movie>>(root, { params });
    return response.data;
}
