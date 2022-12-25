import { getMovieReview } from 'servise/tmdbAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

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
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        'Rewiews not found'
      )}
    </div>
  );
};
