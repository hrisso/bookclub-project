import React from 'react';
import './BookDetail.css';
import { useState, useEffect } from 'react';
import { Link, Switch, Route, useParams, useHistory } from 'react-router-dom';
import { getOneBook } from '../../services/books';
import { destroyReview, postReview, putReview } from '../../services/reviews';
import ReviewCreate from '../ReviewCreate/ReviewCreate';
import ReviewEdit from '../ReviewEdit/ReviewEdit';

export default function BookDetail(props) {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { currentUser, handleDelete } = props;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
    }
    fetchBook();
  }, [id])

  const handleCreateReview = async (formData) => {
    const newReview = await postReview(formData);
    setReviews(prevState => [...prevState, newReview]);
    history.push('/');
  }

  const handleUpdateReview = async (id, formData) => {
    const updatedReview = await putReview(id, formData);
    setReviews(prevState => prevState.map((review) => {
      return review.id === Number(id) ? updatedReview : review
    }));
    history.push('/');
  }

  const handleDeleteReview = async (id) => {
    await destroyReview(id);
    setReviews(prevState => prevState.filter((review) => review.id !== id))
  }

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
        <Link to='/reviews/new'><button className="review-button">Add a Review</button></Link>
      </div>
      { book?.reviews.map((review) => (
        <div className="reviews" key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.content}</p>
          { review?.user_id === currentUser?.id &&
            <>
              <Link to={`/reviews/${review?.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDeleteReview(review?.id)}>Delete</button>
            </>
          }
        </div>
      ))}
      <Switch>
        <Route path='/reviews/:id/edit'>
          <ReviewEdit
            reviews={reviews}
            handleUpdateReview={handleUpdateReview} />
        </Route>
        <Route path='/reviews/new'>
          <ReviewCreate
            reviews={reviews}
            handleCreateReview={handleCreateReview} />
        </Route>
      </Switch>
    </>
  )
}
