// https://api.themoviedb.org/3/movie/550?api_key=7770a554235a470dd8487676c4d97407
import axios from 'axios';

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = '7770a554235a470dd8487676c4d97407';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/week?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getMovieReview = async id => {
  const response = await axios.get(`movie/${id}/reviews?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getSearchMovie = async query => {
  const response = await axios.get(`search/movie?`, {
    params: {
      query,
      api_key: API_KEY,
    },
  });
  return response.data;
};
