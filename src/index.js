import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { books } from './books'
import Book from './Book'
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, title, author, id } = book
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
