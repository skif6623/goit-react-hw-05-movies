import { Link, useLocation } from 'react-router-dom';

export const SearchList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
