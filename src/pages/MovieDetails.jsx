import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'servise/tmdbAPI';

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async id => {
      const movie = await getMovieDetails(id);
      setMovie(movie);
    };

    fetchMovieDetails(id);
  });

  const console = () => {
    console.log(movie);
  };

  return (
    <button type="button" onClick={console}>
      Показати об'єкт фільму
    </button>
  );
};
