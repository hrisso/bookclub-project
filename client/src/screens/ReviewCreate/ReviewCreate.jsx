import React from 'react';
import './ReviewCreate.css';
import { useState } from 'react';

export default function ReviewCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const { handleCreateReview } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateReview(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Review</h3>
      <label>Title:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>Content:
        <input
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}

