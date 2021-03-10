import React from 'react';
import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { destroyReview, postReview, putReview } from '../../services/reviews';
import BookDetail from '../../screens/BookDetail/BookDetail';
import ReviewCreate from '../../screens/ReviewCreate/ReviewCreate';
import ReviewEdit from '../../screens/ReviewEdit/ReviewEdit';

export default function ReviewContainer(props) {
  const [reviews, setReviews] = useState([]);
  const { currentUser, handleDelete } = props;
  const history = useHistory();


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
    <Switch>
      <Route path='/books/:id'>
        <BookDetail
          currentUser={currentUser}
          handleDelete={handleDelete}
          handleDeleteReview={handleDeleteReview}
        />
      </Route>
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
  )
}
