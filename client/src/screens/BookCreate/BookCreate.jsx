import React from 'react';
import { useState } from 'react';

export default function BookCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    img_url: '',
    description: ''
  });

  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Book</h3>
      <div className="image-container">
        <img className="edit-product-image" src={formData.img_url} alt={formData.title} />
      </div>
      <label>Image Link:
        <input
          type='text'
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
        />
      </label>
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
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
