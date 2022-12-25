import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, content }) => (
        <li key={id}>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
