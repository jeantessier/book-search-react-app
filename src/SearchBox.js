import React from 'react'
import './SearchBox.css'

export default function SearchBox({ q, search }) {
    return (
        <div class="search-box">
            <input type="text" name="q" value={q} onChange={e => search(e.target.value)}/>
        </div>
    )
}
