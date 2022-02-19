import { getMovies, getPopularMovies, getIconicMovies, getMoviesByKeywords } from "services/themoviedb/movie.api";
import { getPopularTVShows, getTvShowsByKeywords } from "services/themoviedb/tvshow.api";

export async function getMoviesData() {
    const data = await getMovies();
    return data.results;
}

export async function getPopularMoviesTvShowsData() {
    const moviesData = (await getPopularMovies()).results;
    const tvShowsData = (await getPopularTVShows()).results.slice(0, 5);

    const data = [...moviesData.slice(0, 5), ...tvShowsData].sort((a, b) => (a.vote_average > b.vote_average) ? 1 : -1);
    return data;
}

export async function getIconicMoviesData() {
    const data = (await getIconicMovies()).results;
    return data;
}

export async function getDcMoviesTvShowsData() {
    const keys = ['dc', 'dc comics', 'dc extended universe', 'dceu'];
    const moviesData = (await getMoviesByKeywords(keys)).results.slice(0, 5);
    const tvShowsData = (await getTvShowsByKeywords(keys)).results.slice(0, 5);
    const data = [...moviesData, ...tvShowsData].sort(() => Math.random() - 0.5);

    return data;
}
