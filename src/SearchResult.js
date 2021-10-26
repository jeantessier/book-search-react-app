import React from 'react'
import Book from './Book'
import Review from './Review'
import User from './User'

export default function SearchResult({ searchResult }) {
    if (searchResult.__typename === 'Book') {
        return (
            <Book id={searchResult.id} title={searchResult.title}/>
        )
    }
    if (searchResult.__typename === 'Review') {
        return (
            <Review id={searchResult.id} title={searchResult.book.title} name={searchResult.reviewer.name}/>
        )
    }
    if (searchResult.__typename === 'User') {
        return (
            <User id={searchResult.id} name={searchResult.name}/>
        )
    }
    return (
        <div>WTF?!?!</div>
    )
}
