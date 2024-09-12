import React from 'react'
import { Link } from 'react-router-dom'
import './ReviewSearchResult.css'

export default function ReviewSearchResult({ id, title, name }) {
    return (
        <Link to={`/review/${id}`}>
            <div className="review-search-result">Review of <i dangerouslySetInnerHTML={{__html: title }}/> by <b dangerouslySetInnerHTML={{__html: name }}/></div>
        </Link>
    )
}
