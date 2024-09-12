import React from 'react'
import { Link } from 'react-router-dom'
import './BookSearchResult.css'

export default function BookSearchResult({ id, title }) {
    return (
        <Link to={`/book/${id}`}>
            <div className="book-search-result">Book <i dangerouslySetInnerHTML={{__html: title }}/></div>
        </Link>
    )
}
