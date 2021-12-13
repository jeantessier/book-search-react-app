import { Link } from "react-router-dom"
import './BookReview.css'

export default function BookReview({ id, start, reviewer }) {
    return (
        <Link to={`/review/${id}`}>
            <div className="book-review">
                <span className="start">{start}</span>
                <span className="reviewer">{reviewer.name}</span>
            </div>
        </Link>
    )
}
