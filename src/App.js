    import Search from "./Search"
import './App.css'

export default function App() {
  return (
    <div className="App">
      <h2>Search Book Reviews</h2>
      <Search defaultQuery="awesome ring"/>
    </div>
  )
}
