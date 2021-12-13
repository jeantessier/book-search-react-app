import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import './Review.css'

const REVIEW_QUERY = gql`
    query MyReview($id: ID!) {
        review(id: $id) {
            body
            start
            stop
            book {
                id
                title
            }
            reviewer {
                id
                name
            }
        }
    }
`

export default function Review() {
    const { id } = useParams()

    const { loading, error, data } = useQuery(REVIEW_QUERY, { variables: { id } })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const { body,start, stop, book, reviewer } = data.review

    return (
        <div className="review">
            <div className="body">{body}</div>
            <div className="start">
                <span>Start: </span>
                <span>{start}</span>
            </div>
            <div className="stop">
                <span>Stop: </span>
                <span>{stop ? stop : "In progress"}</span>
            </div>
            <div className="start">
                <span>Book: </span>
                <span>{book.title}</span>
            </div>
            <div className="start">
                <span>Reviewer: </span>
                <span>{reviewer.name}</span>
            </div>
        </div>
    )
}
