import propTypes from 'prop-types';
import { ReviewsList, Item, Author, ReviewContent } from './Reviews.styled';

export default function Reviews({ reviews }) {
  return (
    <>
      <ReviewsList>
        {reviews.map(({ author, review, id }) => (
          <Item key={id}>
            <Author>
              {author}:
              <ReviewContent>"{review}"</ReviewContent>
            </Author>
          </Item>
        ))}
      </ReviewsList>
    </>
  );
}
Reviews.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      review: propTypes.string,
    })
  ).isRequired,
};
