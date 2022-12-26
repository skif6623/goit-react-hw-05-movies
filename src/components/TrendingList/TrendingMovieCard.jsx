import { NavLink } from 'react-router-dom';
import { IMG_URL } from 'servise/tmdbAPI';
import { MovieItem } from './TrendingMovieList.styled';

export const TrendingMovieCard = ({ trendingMovies }) => {
  return (
    <>
      {trendingMovies.map(({ id, original_title, poster_path }) => (
        <MovieItem key={id}>
          <NavLink to={`/movies/${id}`}>
            <img src={`${IMG_URL}${poster_path}`} alt="original_title" />
            <p>{original_title}</p>
          </NavLink>
        </MovieItem>
      ))}
    </>
  );
};
