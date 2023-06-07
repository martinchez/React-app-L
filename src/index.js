import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, title, author, id } = book
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, id, getBook } = props
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title}</h2>
      {/* <button onClick={getSingleBook}>Click Title </button> */}
      <button onClick={getSingleBook}>Click Title </button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
