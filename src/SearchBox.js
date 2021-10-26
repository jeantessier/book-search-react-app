import React from 'react'

export default function SearchBox({ q, setQ }) {
    return (
        <div>
            <input type="text" value={q}/>
        </div>
    )
}
