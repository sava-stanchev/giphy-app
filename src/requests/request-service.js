import { API_URL, API_KEY } from '../common/constants.js'

export const loadTrendingGIFs = () => {
  
  return fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(res => res.json());
};

export const loadSingleGIF = (gifId) => {

  return fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`)
    .then(response => response.json()); 
};

export const loadSearchGifs = (searchTerm = '') => {

  return fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=12`)
    .then(response => response.json());
};
