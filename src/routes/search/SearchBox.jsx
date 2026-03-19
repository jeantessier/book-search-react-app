import './SearchBox.css'

export default function SearchBox({ q, search }) {
    return (
        <div className="search-box">
            <input type="search" name="q" value={q} onChange={e => search(e.target.value)}/>
        </div>
    )
}
