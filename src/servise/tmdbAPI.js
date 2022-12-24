// https://api.themoviedb.org/3/movie/550?api_key=7770a554235a470dd8487676c4d97407
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '7770a554235a470dd8487676c4d97407';

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
};
