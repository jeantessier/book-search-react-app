import UserReview from './UserReview'
import './UserReviews.css'

export default function UserReviews({ reviews }) {
    return (
        <div className="user-reviews">
            <h3>Reviews</h3>
            <div className="container">
                {reviews.map(review => (
                    <UserReview key={review.id} id={review.id} start={review.start} book={review.book}/>
                ))}
            </div>
        </div>
    )
}
