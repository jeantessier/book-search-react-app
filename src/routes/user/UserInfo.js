import './UserInfo.css'

export default function UserInfo({ name, email }) {
    return (
        <div className="user-info">
            <div className="details">
                <span className="detail-name">Name:</span>
                <span className="detail-value" dangerouslySetInnerHTML={{__html: name }}/>
                <span className="detail-name">Email:</span>
                <span className="detail-value">{email}</span>
            </div>
        </div>
    )
}
