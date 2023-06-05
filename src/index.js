import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'

// const author = 'Martin Chege'
// const title = 'Interesting Facts For Curious Minds'
// const img = './images/book.jpg'
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
// const names =['john', 'julia','SUZAN']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
// });

// console.log(newNames)

function BookList() {
  return (
    <section className="bookList">
      {newNames}
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
