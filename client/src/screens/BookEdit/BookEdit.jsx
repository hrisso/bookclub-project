import React from 'react';
import './BookEdit.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BookEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    img_url: '',
    description: ''
  });
  
  const { books, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const bookItem = books.find((book) => book.id === Number(id));
      setFormData({
        title: bookItem.title,
        author: bookItem.author,
        img_url: bookItem.img_url,
        description: bookItem.description
      });
    }
    if (books.length) {
      prefillFormData();
    }
  }, [books, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(id, formData);
  }

  return (
    <form className="book-edit-form"
      onSubmit={handleSubmit}>
      <h3>Edit Book</h3>
      <div className="edit-image-container">
        <img className="edit-book-image" src={formData.img_url} alt={formData.title} />
      <label>Image Link:
        <input
          type='text'
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
        />
      </label>
      </div>
      <div className="book-edit-fields">
      <label>Title:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>Author:
        <input
          type='text'
          name='author'
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <label>Description:
        <textarea
          type='text'
          rows={10}
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
        <button>Submit</button>
      </div>
    </form>
  )
}
