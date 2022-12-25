import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrending } from 'servise/tmdbAPI';
import { useLocation } from 'react-router-dom';

export const TrendingMovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchTrending = async () => {
      const movies = await getTrending();
      setTrendingMovies(movies.results);
    };

    fetchTrending();
  }, []);

  if (!trendingMovies) {
    return;
  }

  return (
    <ul>
      {trendingMovies.map(({ id, original_title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
