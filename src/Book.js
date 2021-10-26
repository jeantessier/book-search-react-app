import React from 'react'

export default function Book({ id, title }) {
    return (
        <div data-book-id={id}>Book <i>{title}</i></div>
    )
}
