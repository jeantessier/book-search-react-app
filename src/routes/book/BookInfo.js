import './BookInfo.css'

export default function BookInfo({ titles, authors, years, publisher }) {
    return (
        <div className="book-info">
            <div className="titles">
                <span>Titles: </span>
                <span>
                    {titles.map(title => {
                        if (title.link) {
                            return <p key={title.title}><a href={title.link}>{title.title}</a></p>
                        } else {
                            return <p key={title.title}>{title.title}</p>
                        }
                    })}
                </span>
            </div>
            <div className="authors">
                <span>Authors: </span>
                <span>
                    {authors.join(", ")}
                </span>
            </div>
            <div className="years">
                <span>Years: </span>
                <span>
                    {years.join(", ")}
                </span>
            </div>
            <div className="publisher">
                <span>Publisher: </span>
                <span>{publisher}</span>
            </div>
        </div>
    )
}
