import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'

// const author = 'Martin Chege'
// const title = 'Interesting Facts For Curious Minds'
// const img = './images/book.jpg'

function BookList() {
  return (
    <section className="bookList">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

// const Book = ({author, title, img, children}) => {
// }
const Book = (props) => {
  console.log(props)
  const {author, title, img } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}
const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book.jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}





const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
