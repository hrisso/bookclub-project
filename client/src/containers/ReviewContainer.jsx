import React from 'react';
import { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import { getOneBook } from '../services/books';
import { destroyReview, postReview, putReview } from '../services/reviews';
import BookDetail from '../screens/BookDetail/BookDetail';
import ReviewCreate from '../screens/ReviewCreate/ReviewCreate';
import ReviewEdit from '../screens/ReviewEdit/ReviewEdit';

export default function ReviewContainer(props) {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { currentUser, handleDelete } = props;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
      setReviews(bookData.reviews);
    }
    fetchBook();
  }, [id, refresh])

  const handleCreateReview = async (bookid, formData) => {
    const newReview = await postReview(bookid, formData);
    setReviews(prevState => [...prevState, newReview]);
    history.push(`/books/${id}`);
    setRefresh(prev => !prev)
  }

  const handleUpdateReview = async (bookid, id, formData) => {
    const updatedReview = await putReview(bookid, id, formData);
    setReviews(prevState => prevState.map((review) => {
      return review.id === Number(id) ? updatedReview : review
    }));
    history.push(`/books/${bookid}`);
    setRefresh(prev => !prev)
  }

  const handleDeleteReview = async (bookid, id) => {
    await destroyReview(bookid, id);
    setReviews(prevState => prevState.filter((review) => review.id !== Number(id)))
    setRefresh(prev => !prev)
  }

  return (
    <Switch>
      <Route exact path='/books/:id'>
        <BookDetail
          book={book}
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
