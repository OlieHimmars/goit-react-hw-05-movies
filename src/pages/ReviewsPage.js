import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/api';
import Reviews from 'components/Reviews/Reviews';
import { NoReviewText } from 'components/Reviews/Reviews.styled';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesReviews(movieId).then(all => {
      const mappedReviews = [];
      all.results.map(({ author, content, id }) => {
        const authorReview = {
          id: id,
          author: author,
          review: content,
        };
        return mappedReviews.push(authorReview);
      });
      setReviews(mappedReviews);
    });
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <Reviews reviews={reviews} />
  ) : (
    <NoReviewText>We don't have any reviews for this movie.</NoReviewText>
  );
}
