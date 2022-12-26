import { useState, useEffect } from 'react';
import { getTrending } from 'servise/tmdbAPI';
import toast, { Toaster } from 'react-hot-toast';
import { TrendingMovieCard } from './TrendingMovieCard';
import { MovieList } from './TrendingMovieList.styled';

export const TrendingMovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    try {
      const fetchTrending = async () => {
        const movies = await getTrending();
        setTrendingMovies(movies.results);
      };

      fetchTrending();
    } catch (error) {
      toast.error(
        'Виникла помилка при завантаженні. Перезагрузіть будь ласка сторінку'
      );
    }
  }, []);

  if (!trendingMovies) {
    return;
  }

  return (
    <>
      <MovieList>
        <TrendingMovieCard trendingMovies={trendingMovies} />
      </MovieList>
      <Toaster />
    </>
  );
};
