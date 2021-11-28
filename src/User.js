import React from 'react'
import './User.css'

export default function User({ id, name }) {
    return (
        <div class="user" data-user-id={id}>User <b>{name}</b></div>
    )
}
