import './BookInfo.css'

export default function BookInfo({ titles, authors, years, publisher }) {
    return (
        <div className="book-info">
            <div className="titles">
                <span>Titles: </span>
                <span>
                    {titles.map(title => {
                        if (title.link) {
                            return <p key={title.title}><a href={title.link} dangerouslySetInnerHTML={{__html: title.title }}/></p>
                        } else {
                            return <p key={title.title} dangerouslySetInnerHTML={{__html: title.title }}/>
                        }
                    })}
                </span>
            </div>
            <div className="authors">
                <span>Authors: </span>
                <span dangerouslySetInnerHTML={{__html: authors.join(", ") }}/>
            </div>
            <div className="years">
                <span>Years: </span>
                <span dangerouslySetInnerHTML={{__html: years.join(", ") }}/>
            </div>
            <div className="publisher">
                <span>Publisher: </span>
                <span dangerouslySetInnerHTML={{__html: publisher }}/>
            </div>
        </div>
    )
}
