import React from 'react'

export default function SearchBox({ q, search }) {
    return (
        <div>
            <input type="text" name="q" value={q} onChange={e => search(e.target.value)}/>
        </div>
    )
}
