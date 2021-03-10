import React from 'react';
import { useState } from 'react';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import { destroyReview, postReview, putReview } from '../services/reviews';
import BookDetail from '../screens/BookDetail/BookDetail';
import ReviewCreate from '../screens/ReviewCreate/ReviewCreate';
import ReviewEdit from '../screens/ReviewEdit/ReviewEdit';

export default function ReviewContainer(props) {
  const [reviews, setReviews] = useState([]);
  const { currentUser, handleDelete } = props;
  const { bookid } = useParams();
  const history = useHistory();


  const handleCreateReview = async (formData) => {
    const newReview = await postReview(bookid, formData);
    setReviews(prevState => [...prevState, newReview]);
    history.push(`/books/${bookid}`);
  }

  const handleUpdateReview = async (id, formData) => {
    const updatedReview = await putReview(bookid, id, formData);
    setReviews(prevState => prevState.map((review) => {
      return review.id === Number(id) ? updatedReview : review
    }));
    history.push(`/books/${bookid}`);
  }

  const handleDeleteReview = async (id) => {
    await destroyReview(bookid, id);
    setReviews(prevState => prevState.filter((review) => review.id !== id))
  }

  return (
    <Switch>
      <Route exact path='/books/:id'>
        <BookDetail
          currentUser={currentUser}
          handleDelete={handleDelete}
          handleDeleteReview={handleDeleteReview}
        />
      </Route>
      <Route path='/books/:bookid/reviews/new'>
        <ReviewCreate
          reviews={reviews}
          handleCreateReview={handleCreateReview} />
      </Route>
      <Route path='/books/:bookid/reviews/:id/edit'>
        <ReviewEdit
          reviews={reviews}
          handleUpdateReview={handleUpdateReview} />
      </Route>
    </Switch>
  )
}
