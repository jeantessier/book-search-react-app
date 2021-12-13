import React from 'react'
import './UserSearchResult.css'

export default function UserSearchResult({ id, name }) {
    return (
        <div className="user-search-result" data-user-id={id}>User <b>{name}</b></div>
    )
}
