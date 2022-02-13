import axios from 'axios';
import { THEMOVIEDB_CLIENT_ID } from '@env'

const theMovieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: THEMOVIEDB_CLIENT_ID
  }
});

theMovieDbApi.interceptors.request.use()


export { theMovieDbApi };
