import React from 'react'
import './BookSearchResult.css'

export default function BookSearchResult({ id, title }) {
    return (
        <div className="book-search-result" data-book-id={id}>Book <i>{title}</i></div>
    )
}
