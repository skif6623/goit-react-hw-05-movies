import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, IMG_URL } from 'servise/tmdbAPI';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async id => {
      const cast = await getMovieCast(id);
      setCast(cast.cast);
    };

    fetchMovieCast(id);
  }, [id]);

  if (!cast) {
    return;
  }

  const getActorImage = image => {
    if (image === null) {
      return '#';
    }
    return `${IMG_URL}${image}`;
  };

  return (
    <div>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={getActorImage(profile_path)} alt="" />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
