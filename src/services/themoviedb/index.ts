import axios from 'axios';
import { THEMOVIEDB_CLIENT_ID } from '@env'

const HBO_MAX_CODE = 384;

const theMovieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: THEMOVIEDB_CLIENT_ID,
    with_watch_providers: HBO_MAX_CODE,
    watch_region: 'BR',
  }
});

theMovieDbApi.interceptors.request.use()


export { theMovieDbApi };
