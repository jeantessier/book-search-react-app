import { useQuery, gql } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
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
            <div className="book">
                <span>Book: </span>
                <span><Link to={`/book/${book.id}`}>{book.title}</Link></span>
            </div>
            <div className="body"><ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} children={body}/></div>
            <div className="start">
                <span>Start: </span>
                <span>{start}</span>
            </div>
            <div className="stop">
                <span>Stop: </span>
                <span>{stop ? stop : "In progress"}</span>
            </div>
            <div className="reviewer">
                <span>Reviewer: </span>
                <span><Link to={`/user/${reviewer.id}`}>{reviewer.name}</Link></span>
            </div>
        </div>
    )
}
