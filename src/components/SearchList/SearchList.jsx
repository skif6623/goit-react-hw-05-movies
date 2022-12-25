import PropTypes from 'prop-types';
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

SearchList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
