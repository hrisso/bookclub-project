import React from 'react';
import './Books.css';
import { Link } from 'react-router-dom';

export default function Books(props) {
  const { books, currentUser} = props;

  return (
    <div className="books-container">
      { currentUser &&
        <Link to='/books/new'><button>Add a Book</button></Link>
      }
      <div className="books">
        {books.map((book) => (
          <React.Fragment key={book.id}>
            <Link to={`/books/${book.id}`}>
              <div className="book-card">
                <img src={book.img_url} alt={book.title}></img>
                <p className="card-title">{book.title}</p>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
