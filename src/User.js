import React from 'react'

export default function User({ id, name }) {
    return (
        <div data-user-id={id}>User <b>{name}</b></div>
    )
}
