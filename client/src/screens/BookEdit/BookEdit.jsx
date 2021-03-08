import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BookEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
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
    <form onSubmit={handleSubmit}>
      <h3>Edit Book</h3>
      <label>Name:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
