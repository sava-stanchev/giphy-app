import { API_URL, API_KEY } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { getUploaded } from '../data/uploaded.js';

export const loadTrendingGIFs = async () => {
  const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=25&rating=g`);
  const jsonResult = await response.json();

  return jsonResult;
};

export const loadSingleGIF = async (gifId) => {
  const res = await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`);

  return res.json();
};

export const loadSearchGifs = async (searchTerm = '') => {
  const res = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=20`);

  return res.json();
};

export const uploadGif = async (formData) => {
  const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
      {
        method: 'POST',
        body: formData,
      });
  const jsonResult = await response.json();

  return jsonResult;
};

export const loadUploadedGifs = async () => {
  const res = await fetch(`${API_URL}?api_key=${API_KEY}&ids=${getUploaded().join(',')}`);

  return res.json();
};

export const loadFavoriteGifs = async () => {
  const res = await fetch(`${API_URL}?api_key=${API_KEY}&ids=${getFavorites().join(',')}`);

  return res.json();
};
