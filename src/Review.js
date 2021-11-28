import React from 'react'
import './Review.css'

export default function Review({ id, title, name }) {
    return (
        <div class="review" data-review-id={id}>Review of <i>{title}</i> by <b>{name}</b></div>
    )
}
