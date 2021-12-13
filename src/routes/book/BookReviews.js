import BookReview from './BookReview'
import './BookReviews.css'

export default function BookReviews({ reviews }) {
    return (
        <div className="book-reviews">
            <h3>Reviews</h3>
            {reviews.map(review => (
                <BookReview key={review.id} id={review.id} start={review.start} reviewer={review.reviewer}/>
            ))}
        </div>
    )
}
