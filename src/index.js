import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client'
import App from './App'
import Search from './routes/search'
import Book from './routes/book'
import Review from './routes/review'
import User from './routes/user'
import NotFound from './routes/notfound'
import './index.css'

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache()
})

ReactDOM.createRoot(
    document.getElementById('root')
).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App/>}>
                      <Route index element={<Search/>}/>
                      <Route path="search" element={<Search/>}/>
                      <Route path="book/:id" element={<Book/>}/>
                      <Route path="review/:id" element={<Review/>}/>
                      <Route path="user/:id" element={<User/>}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
