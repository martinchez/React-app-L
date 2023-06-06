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
  const handleFormInput = (e) =>{
    // console.log(e);
    console.log(e.target.name);
    console.log(e.target.value)
    console.log(e.target.type)
  }
  const handleButtonClick = () =>{
    alert('Still Learning the tactics');
  }
  const handleFormSubmission = (e) =>{
    e.preventDefault();
    console.log('Form submitted')
  }
  return (
    <section>
      <form >
        <h2>Tyoical Fowm</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button type="submit" onClick={handleFormSubmission} >
        {' '}
        submit
      </button>
      <div>
        <button type="button" onClick={handleFormSubmission}>
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
