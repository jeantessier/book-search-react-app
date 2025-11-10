import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
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
  const [searchParams, setSearchParams] = useSearchParams()

  const [q, setQ] = useState(searchParams.get("q") || DEFAULT_QUERY)
  const { loading, error, data, refetch } = useQuery(BOOK_SEARCH_QUERY, { variables: { q } })

  const search = text => {
    const params = { q: text }
    setSearchParams(params, { replace: true })
    refetch(params)
    setQ(text)
  }

  return (
    <div className="search">
      <SearchBox q={q} search={search}/>
      <SearchResults loading={loading} error={error} data={data}/>
    </div>
  )
}
