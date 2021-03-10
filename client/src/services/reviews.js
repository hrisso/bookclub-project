import api from './api-config';

export const postReview = async (bookId, reviewData) => {
  const resp = await api.post(`books/${bookId}/reviews`, { review: reviewData });
  return resp.data;
}

export const putReview = async (bookId, id, reviewData) => {
  const resp = await api.put(`/books/${bookId}/reviews/${id}`, { review: reviewData });
  return resp.data;
}

export const destroyReview = async (bookId, id) => {
  const resp = await api.delete(`/books/${bookId}/reviews/${id}`);
  return resp;
}