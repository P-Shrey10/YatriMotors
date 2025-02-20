import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create a new blog post
export const createArticle = async (data) => {
  try {
    const response = await api.post('/blogs', data);
    return response.data;
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};

// View a single blog post by ID
export const viewArticle = async (id) => {
  try {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};

// Update an existing blog post by ID
export const updateArticle = async (id, data) => {
  try {
    const response = await api.put(`/blogs/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating article:', error);
    throw error;
  }
};

// Delete a blog post by ID
export const deleteArticle = async (id) => {
  try {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
};

// Fetch all blog posts
export const getArticles = async () => {
  try {
    const response = await api.get('/blogs');
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export default api;
