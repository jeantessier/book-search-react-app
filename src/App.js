import { Outlet } from "react-router-dom"
import './App.css'

export default function App() {
  return (
    <div className="App">
      <h2>Search Book Reviews</h2>
      <Outlet/>
    </div>
  )
}
