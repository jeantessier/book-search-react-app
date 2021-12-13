import { useQuery, gql } from "@apollo/client"
import { useState } from "react"
import SearchBox from "./SearchBox"
import SearchResults from "./SearchResults"
import './Search.css'

const BOOK_SEARCH_QUERY = gql`
  query MySearch($q: String!) {
    search(q: $q) {
      __typename
      ... on Book {
        id
        title
      }
      ... on Review {
        id
        book {
          title
        }
        reviewer {
          name
        }
      }
      ... on User {
        id
        name
      }
    }
  }
`

const DEFAULT_QUERY = "awesome ring"

export default function Search() {
  const [q, setQ] = useState(DEFAULT_QUERY)
  const { loading, error, data, refetch } = useQuery(BOOK_SEARCH_QUERY, { variables: { q } })

  const search = text => {
    setQ(text)
    refetch({ q: text })
  }

  return (
    <div className="search">
      <SearchBox q={q} search={search}/>
      <SearchResults loading={loading} error={error} data={data}/>
    </div>
  )
}
