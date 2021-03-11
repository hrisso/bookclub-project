import React from 'react';
import './BookDetail.css';
import { Link } from 'react-router-dom';

export default function BookDetail(props) {
  const { book, currentUser, handleDelete, handleDeleteReview } = props;

  return (
    <>
      <div className="book-detail">
        <img src={book?.img_url} alt={book?.title} />
        <div className="detail">
        <h3 className="title">{book?.title}</h3>
        <h4 className="author">{book?.author}</h4>
        <p className="description">{book?.description}</p>
        { book?.user_id === currentUser?.id &&
            <div className="button-container">
              <Link to={`/books/${book?.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(book?.id)}>Delete</button>
            </div>
        }
        </div>
      </div>
      <div className="review-heading">
        <h2 className="review-title">Reviews</h2>
        <Link to={`/books/${book?.id}/reviews/new`}><button className="review-button">Add a Review</button></Link>
      </div>
      { book?.reviews.map((review) => (
        <div className="reviews" key={review.id}>
          <div className="review-edit-delete">
          <h3>{review.title}</h3>
          { review?.user_id === currentUser?.id &&
            <div>
              <Link to={`/books/${book?.id}/reviews/${review?.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDeleteReview(book?.id, review?.id)}>Delete</button>
            </div>
          }
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </>
  )
}
