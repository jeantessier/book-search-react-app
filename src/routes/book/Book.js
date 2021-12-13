import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import BookInfo from './BookInfo'
import BookReviews from './BookReviews'
import './Book.css'

const BOOK_QUERY = gql`
  query MyBook($id: ID!) {
    book(id: $id) {
      titles {
        title
        link
      }
      authors
      years
      publisher
      reviews {
        id
        start
        reviewer {
          id
          name
        }
      }
    }
  }
`

export default function Book() {
    const {id} = useParams()

    const { loading, error, data } = useQuery(BOOK_QUERY, { variables: { id } })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    const { titles, authors, years, publisher, reviews } = data.book

    return (
        <div className="book">
            <BookInfo
                titles={titles}
                authors={authors}
                years={years}
                publisher={publisher}/>
            <BookReviews reviews={reviews}/>
        </div>
    )
}
