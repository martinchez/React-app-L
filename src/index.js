import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'


const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
];


function BookList() {
  return (
    <section className="bookList">
      {books.map((book) =>{
        const {img, title, author} = book;
        return (
          <Book img ={img} title = {title} author ={author} />
        )
      })}
    </section>
  )
}

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





const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
