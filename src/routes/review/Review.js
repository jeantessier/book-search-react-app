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
            <div className="details">
                <span className="detail-name">Book:</span>
                <span className="detail-value"><Link to={`/book/${book.id}`} dangerouslySetInnerHTML={{__html: book.title }}/></span>
                <span className="body"><ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} children={body}/></span>
                <span className="detail-name">Start:</span>
                <span className="detail-value date">{start}</span>
                <span className="detail-name">Stop:</span>
                <span className="detail-value date">{stop ? stop : "In progress"}</span>
                <span className="detail-name">Reviewer:</span>
                <span className="detail-value"><Link to={`/user/${reviewer.id}`} dangerouslySetInnerHTML={{__html: reviewer.name }}/></span>
            </div>
        </div>
    )
}
