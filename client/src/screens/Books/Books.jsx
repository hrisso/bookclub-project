import React from 'react';
import { Link } from 'react-router-dom';

export default function Books(props) {
  const { books, currentUser, handleDelete } = props;

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
        { book.user_id === currentUser?.id &&
          <>
            <Link to={`/books/${book.id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </>
        }
      </React.Fragment>
    ))}
    </>
  )
}
