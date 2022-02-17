import axios from 'axios';
import { THEMOVIEDB_CLIENT_ID } from '@env';
import dataFake from './data-fake.json';

const HBO_MAX_CODE = 384;

const theMovieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: THEMOVIEDB_CLIENT_ID,
    with_watch_providers: HBO_MAX_CODE,
    watch_region: 'BR',
  }
});

// Mock response data when request error or THEMOVIE_CLIENT_ID not defined
theMovieDbApi.interceptors.response.use((response) => {
  return response;
}, () => {
  return { data: dataFake };
});

export { theMovieDbApi };
