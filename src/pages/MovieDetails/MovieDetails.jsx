import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'servise/tmdbAPI';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async id => {
      const movie = await getMovieDetails(id);
      setMovie(movie);
    };

    fetchMovieDetails(id);
  }, [id]);

  if (!movie) {
    return;
  }

  const { original_title, vote_average, overview, genres, poster_path } = movie;

  const getGenres = () => {
    return genres.map(genre => genre.name);
  };

  const genreList = getGenres().join(', ');
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <img src={poster} alt="" />
      <h2>{original_title}</h2>
      <ul>
        <li>
          <p>
            User score:{' '}
            {Number.parseFloat((vote_average * 10).toString().slice(0, 3))}%
          </p>
        </li>
        <li>
          <p>Overview</p>
          <p>{overview}</p>
        </li>
        <li>
          <p>Genres</p>
          <p>{genreList}</p>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
