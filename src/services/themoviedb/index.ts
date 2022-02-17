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

const patternId = /[\d+]*[\?]/

// Mock response data when request error or THEMOVIE_CLIENT_ID not defined
theMovieDbApi.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const routeUrl = error.request.responseURL as string;

  if(routeUrl.includes('https://api.themoviedb.org/3/movie/') ||
     routeUrl.includes('https://api.themoviedb.org/3/tv/')) {
       const id = routeUrl.match(patternId);
       return { data: id === null ? dataFake.results[0] : dataFake.results.find(x => x.id === Number(String(id[0]).replace('?', ''))) }
     }

  return { data: dataFake };
});

export { theMovieDbApi };
