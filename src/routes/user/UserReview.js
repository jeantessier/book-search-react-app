import { Link } from "react-router-dom"
import './UserReview.css'

export default function UserReview({ id, start, book }) {
    return (
        <Link to={`/review/${id}`}>
            <div className="user-review">
                <span className="start">{start.substring(0, 4)}</span>
                <span className="book" dangerouslySetInnerHTML={{__html: book.title }}/>
            </div>
        </Link>
    )
}
