import React from 'react'

export default function SearchBox({ q, search }) {
    return (
        <div>
            <input type="text" name="q" value={q}/>
            <button onClick={() => search("foobar")}>Search</button>
        </div>
    )
}
