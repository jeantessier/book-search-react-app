import React from 'react'
import Book from './Book'
import Review from './Review'
import User from './User'
import './SearchResult.css'

export default function SearchResult({ searchResult }) {
    return (
        <div class="search_result">
            {searchResult.__typename === 'Book' &&
                <Book id={searchResult.id} title={searchResult.title}/>
            }
            {searchResult.__typename === 'Review' &&
                <Review id={searchResult.id} title={searchResult.book.title} name={searchResult.reviewer.name}/>
            }
            {searchResult.__typename === 'User' &&
                <User id={searchResult.id} name={searchResult.name}/>
            }
        </div>
    )
}
