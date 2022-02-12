import axios from 'axios';

const theMovieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export { theMovieDbApi };
