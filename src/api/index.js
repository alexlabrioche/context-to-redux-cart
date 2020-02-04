import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export function getBooks() {
  return axios.get(`${API_BASE_URL}/products`);
}
