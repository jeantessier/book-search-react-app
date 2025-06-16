import BookSearchResult from './BookSearchResult'
import ReviewSearchResult from './ReviewSearchResult'
import UserSearchResult from './UserSearchResult'
import './SearchResult.css'

export default function SearchResult({ _key, searchResult }) {
    return (
        <div className="search-result">
            {searchResult.__typename === 'Book' &&
                <BookSearchResult id={searchResult.id} title={searchResult.title}/>
            }
            {searchResult.__typename === 'Review' &&
                <ReviewSearchResult id={searchResult.id} title={searchResult.book.title} name={searchResult.reviewer.name}/>
            }
            {searchResult.__typename === 'User' &&
                <UserSearchResult id={searchResult.id} name={searchResult.name}/>
            }
        </div>
    )
}
