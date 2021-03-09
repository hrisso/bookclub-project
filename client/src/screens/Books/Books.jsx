import React from 'react';
import './Books.css';
import { Link } from 'react-router-dom';

export default function Books(props) {
  const { books, currentUser} = props;

  return (
    <>
    { currentUser &&
      <Link to='/books/new'><button>Create</button></Link>
    }
    {books.map((book) => (
      <React.Fragment key={book.id}>
        <Link to={`/books/${book.id}`}>
          <div className="book-card">
            <img src={book.img_url} alt={book.title}></img>
            <h3>{book.title}</h3>
          </div>
        </Link>
      </React.Fragment>
    ))}
    </>
  )
}
