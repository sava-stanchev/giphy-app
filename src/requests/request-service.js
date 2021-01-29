import { API_URL, API_KEY } from '../common/constants.js'

export const loadTrendingGIFs = () => {
  
  return fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(res => res.json());
};