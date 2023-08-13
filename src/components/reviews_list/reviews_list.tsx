import { ReviewItem } from '..//review__item/review_item';
import { typeReviews } from '../../types/type_reviews';

type ReviewsListProps = {
  reviews: typeReviews[];
}

function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={ review.id } review={ review } />
        ))}
      </ul>
    </>
  );

}

export { ReviewsList };
