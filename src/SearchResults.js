import React from 'react'
import SearchResult from './SearchResult'

export default function SearchResults({ loading, error, data }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        data.search.map(searchResult => (
            <SearchResult searchResult={searchResult}/>
        ))
    )
}
