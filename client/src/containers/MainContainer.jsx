import React from "react";
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { destroyBook, getAllBooks, postBook, putBook } from '../services/books';
import Books from '../screens/Books/Books';
import BookCreate from '../screens/BookCreate/BookCreate';
import ReviewContainer from './ReviewContainer';
import BookEdit from '../screens/BookEdit/BookEdit';

export default function MainContainer(props) {
  const [books, setBooks] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      const booksList = await getAllBooks();
      setBooks(booksList);
    }
    fetchBooks();
  }, [])

  const handleCreate = async (formData) => {
    const newBook = await postBook(formData);
    setBooks(prevState => [...prevState, newBook]);
    history.push('/');
  }

  const handleDelete = async (id) => {
    await destroyBook(id);
    setBooks(prevState => prevState.filter((book) => book.id !== id))
    history.push('/');
  }

  const handleUpdate = async (id, formData) => {
    const updatedBook = await putBook(id, formData);
    setBooks(prevState => prevState.map((book) => {
      return book.id === Number(id) ? updatedBook : book
    }));
    history.push(`/books/${id}`);
  }

  return (
    <Switch>
      <Route path='/books/new'>
        <BookCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/books/:id/edit'>
        <BookEdit
          books={books}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/books/:id'>
        <ReviewContainer
        currentUser={currentUser}
        handleDelete={handleDelete}
        />
      </Route>
      <Route exact path='/'>
        <Books
        books={books}
        currentUser={currentUser}
        handleDelete={handleDelete}
        />
      </Route>
    </Switch>
  );
}
