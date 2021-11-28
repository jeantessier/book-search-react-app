import './App.css';
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import SearchBox   from "./SearchBox";
import SearchResults   from "./SearchResults";

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

function App() {
  const [q, setQ] = useState("awesome ring")
  const { loading, error, data, refetch } = useQuery(BOOK_SEARCH_QUERY, { variables: { q } });

  const search = text => {
    setQ(text)
    refetch({ q: text })
  }

  return (
    <div className="App">
      <h2>Search Book Reviews</h2>
      <SearchBox q={q} search={search}/>
      <SearchResults loading={loading} error={error} data={data}/>
    </div>
  );
}

export default App;
