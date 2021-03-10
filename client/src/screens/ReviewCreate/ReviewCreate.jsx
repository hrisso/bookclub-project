import React from 'react';
import './ReviewCreate.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewCreate(props) {
  const { bookid } = useParams();
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
    handleCreateReview(bookid, formData);
  }

  return (
    <div className="add-review-container">
    <form className="add-review-form" onSubmit={handleSubmit}>
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
        <textarea
          type='text'
          rows={10}
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      </form>
    </div>
  )
}

