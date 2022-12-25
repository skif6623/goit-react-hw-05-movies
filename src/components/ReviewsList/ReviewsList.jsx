export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
