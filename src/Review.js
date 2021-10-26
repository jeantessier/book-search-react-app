import React from 'react'

export default function Review({ id, title, name }) {
    return (
        <div data-review-id={id}>Review of <i>{title}</i> by <b>{name}</b></div>
    )
}
