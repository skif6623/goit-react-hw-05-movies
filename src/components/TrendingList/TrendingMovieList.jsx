import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrending } from 'tmdbAPI';

export const TrendingMovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

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
          <NavLink>{original_title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
