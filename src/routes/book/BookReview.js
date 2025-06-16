import { Link } from "react-router-dom"
import './BookReview.css'

export default function BookReview({ id, start, reviewer }) {
    return (
        <Link to={`/review/${id}`}>
            <div className="book-review">
                <span className="start">{start.substring(0, 4)}</span>
                <span className="reviewer" dangerouslySetInnerHTML={{__html: reviewer.name }}/>
            </div>
        </Link>
    )
}
