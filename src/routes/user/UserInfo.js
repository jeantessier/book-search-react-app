import './UserInfo.css'

export default function UserInfo({ name, email }) {
    return (
        <div className="user-info">
            <div className="name">
                <span>Name: </span>
                <span>{name}</span>
            </div>
            <div className="publisher">
                <span>Email: </span>
                <span>{email}</span>
            </div>
        </div>
    )
}
