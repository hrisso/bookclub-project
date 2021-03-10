import React from 'react';
import './ReviewEdit.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  
  const { reviews, handleUpdateReview } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const reviewItem = reviews.find((review) => review.id === Number(id));
      setFormData({
        title: reviewItem.title,
        content: reviewItem.content
      });
    }
    if (reviews.length) {
      prefillFormData();
    }
  }, [reviews, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateReview(id, formData);
  }

  return (
    <div className="edit-review-container">
    <form className="edit-review-form" onSubmit={handleSubmit}>
      <h3>Edit Review</h3>
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
    </div>
  )
}
