import { API_URL, API_KEY } from '../common/constants.js'

export const loadTrendingGIFs = () => {
  
  return fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=25&rating=g`)
    .then(response => response.json());
};

export const loadSingleGIF = (gifId) => {

  return fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`)
    .then(response => response.json());
};

export const loadSearchGifs = (searchTerm = '') => {

  return fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=20`)
    .then(response => response.json());
};

export const uploadGif = async () => {
  const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
      {
        method: 'POST',
        body: FormData,
      });
  const jsonResult = await response.json();

  return jsonResult;
};
