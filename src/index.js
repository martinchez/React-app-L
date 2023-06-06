import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'


const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book.jpg',
    id:1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id:2,
  },
];


function BookList() {
  return (
    <section className="bookList">
      <EventExamples />
      {books.map((book) =>{
        console.log(book)
        const { img, title, author ,id} = book

        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}
const EventExamples = () =>{
  
  return (
    <section>
      <form >
        <h2>Tyoical Fowm</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button type="submit" >
        submit
      </button>
      <div>
        <button type="button" onClick={() =>console.log("click me") }>
          Click me
        </button>
      </div>
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
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
