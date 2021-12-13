import React from 'react'
import './ReviewSearchResult.css'

export default function ReviewSearchResult({ id, title, name }) {
    return (
        <div class="review-search-result" data-review-id={id}>Review of <i>{title}</i> by <b>{name}</b></div>
    )
}
