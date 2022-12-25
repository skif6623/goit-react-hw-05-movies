import { useSearchParams } from 'react-router-dom';
import { Search } from 'components/Search/Search';
import { useEffect, useState } from 'react';
import { getSearchMovie } from 'servise/tmdbAPI';
import { SearchList } from 'components/SearchList/SearchList';

export const Movies = () => {
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchSearchMovie = async query => {
      const movies = await getSearchMovie(query);
      setFilms(movies.results);
    };

    fetchSearchMovie(query);
  }, [query]);

  const setQuery = value => {
    setSearchParams(value === '' ? {} : { query: value });
  };

  return (
    <main>
      <Search onSet={setQuery} />
      {films && query && <SearchList films={films} />}
    </main>
  );
};

