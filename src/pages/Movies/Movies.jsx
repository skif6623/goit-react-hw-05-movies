import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = query => {
    const queryParams = query !== '' ? { query } : {};
    setSearchParams(queryParams);
  };

  return (
    <>
      <input type="text" onChange={() => handleSubmit()} />
      <button type="submit">Search</button>
    </>
  );
};
