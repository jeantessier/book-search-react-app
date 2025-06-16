import './BookInfo.css'

export default function BookInfo({ titles, authors, years, publisher }) {
    return (
        <div className="book-info">
            <div className="titles">
                <span>Titles</span>
                {titles.map(title => {
                    if (title.link) {
                        return <span key={title.title}><a href={title.link} dangerouslySetInnerHTML={{__html: title.title }}/></span>
                    } else {
                        return <span key={title.title} dangerouslySetInnerHTML={{__html: title.title }}/>
                    }
                })}
            </div>
            <div className="details">
                    <span className="detail-name">Authors:</span>
                    <span className="detail-value" dangerouslySetInnerHTML={{__html: authors.join(", ")}}/>
                    <span className="detail-name">Years:</span>
                    <span className="detail-value" dangerouslySetInnerHTML={{__html: years.join(", ")}}/>
                    <span className="detail-name">Publisher:</span>
                    <span className="detail-value" dangerouslySetInnerHTML={{__html: publisher}}/>
            </div>
        </div>
    )
}
