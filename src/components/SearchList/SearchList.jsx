import { Link } from 'react-router-dom';

export const SearchList = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
