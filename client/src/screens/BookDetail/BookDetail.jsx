import React from 'react';
import './BookDetail.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneBook } from '../../services/books';

export default function BookDetail(props) {
  const [book, setBook] = useState(null);
  const { currentUser, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
    }
    fetchBook();
  }, [id])

  return (
    <div>
      <img src={book?.img_url} alt={book?.title}/>
      <h3>{book?.title}</h3>
      <h4>{book?.author}</h4>
      <p>{book?.description}</p>
      { book?.user_id === currentUser?.id &&
          <>
            <Link to={`/books/${book?.id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(book?.id)}>Delete</button>
          </>
      }
      <h2>Reviews</h2>
      <button>Add a Review</button>
      { book?.reviews.map((review) => (
        <div className="reviews" key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  )
}
