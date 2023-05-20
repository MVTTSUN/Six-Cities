import { Comment } from '../../types/types';
import Review from '../review/review';

type ReviewsListProps = {
  commentsDataId: Comment[];
}

export default function ReviewsList({commentsDataId} : ReviewsListProps) {
  let count = 0;

  return (
    <ul className="reviews__list">
      {commentsDataId.map((commentDataId) => <Review key={count++} commentDataId={commentDataId} />)}
    </ul>
  );
}
