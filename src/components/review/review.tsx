import { Comment } from '../../types/types';

type ReviewsProps = {
  commentDataId: Comment;
};

export default function Review({commentDataId} : ReviewsProps) {
  const { user, rating, comment, date } = commentDataId;
  const dateReview = new Date(date);
  const dateReviewConfig: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: 100 / 5 * rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time
          className="reviews__time"
          dateTime={`${dateReview.getFullYear()}-${dateReview.toLocaleDateString('en-US', {month: '2-digit'})}-${dateReview.getDate()}`}
        >
          {dateReview.toLocaleDateString('en-US', dateReviewConfig)}
        </time>
      </div>
    </li>
  );
}
