import React from 'react'
import './Book.css'

export default function Book({ id, title }) {
    return (
        <div class="book" data-book-id={id}>Book <i>{title}</i></div>
    )
}
