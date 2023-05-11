import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
// creating a component
function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="./images/book.jpg" />
)
const Title = () => <h2> There Are Moms Way Worse Than You</h2>
const Author = () => <h4>Author</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
