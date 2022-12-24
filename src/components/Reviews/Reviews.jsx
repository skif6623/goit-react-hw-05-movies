import { getMovieReview } from 'servise/tmdbAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReview] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async id => {
      const reviews = await getMovieReview(id);
      setReview(reviews.results);
    };
    fetchMovieCast(id);
  }, [id]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
