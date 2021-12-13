import React from 'react'
import SearchResult from './SearchResult'
import './SearchResults.css'

export default function SearchResults({ loading, error, data }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data.search.length === 0) return null

    return (
        <div className="search-results">
            {data.search.map(searchResult => (
                <SearchResult key={searchResult.id} searchResult={searchResult}/>
            ))}
        </div>
    )
}
