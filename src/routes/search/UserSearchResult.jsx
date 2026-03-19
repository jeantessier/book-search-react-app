import { Link } from 'react-router'
import './UserSearchResult.css'

export default function UserSearchResult({ id, name }) {
    return (
        <Link to={`/user/${id}`}>
            <div className="user-search-result">User <b dangerouslySetInnerHTML={{__html: name }}/></div>
        </Link>
    )
}
