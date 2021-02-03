import { API_URL, API_KEY } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { addToUploadedGifs, getUploaded } from '../data/uploaded.js';

export const loadTrendingGifs = async () => {
  try {
    const res = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=25&rating=g`);

    if (!res.ok) {
      throw new Error('Error')
    }
    return res.json();
  } catch (err) {
    console.log(err);
    return false;
  }
};

/**
 * @author Dimitar Stanoev
 * Sends GET request to retrieve data by GIF ID
 * @return {Promise} promise object containing the response data
 */
export const loadSingleGif = async (gifId) => {
  
  try {
    const res = await fetch(`${API_URL}/${gifId}?aspi_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error('Error')
    }

    return res.json();

  } catch (error) {
    console.log(error);

    return false;
  }
  
};

export const loadSearchGifs = async (searchTerm = '') => {
  const res = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=20`);

  return res.json();
};

export const uploadGif = async (formData) => {
  try {
    const res = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
        {
          method: 'POST',
          body: formData,
        });
    const jsonResult = await res.json();
    addToUploadedGifs(jsonResult);

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};

/**
 * @author Dimitar Stanoev
 * Sends GET request to retrieve data by GIF IDs
 * @return {Promise} promise object containing the response data
 */
export const loadUploadedGifs = async () => {
  const res = await fetch(`${API_URL}?api_key=${API_KEY}&ids=${getUploaded().join(',')}`);

  return res.json();
};

export const loadFavoriteOrRandomGifs = async () => {
  let res;
  if (getFavorites().length === 0) {
    res = await fetch(`${API_URL}/random?api_key=${API_KEY}`);
  } else {
    res = await fetch(`${API_URL}?api_key=${API_KEY}&ids=${getFavorites().join(',')}`);
  }
  
  return res.json();
};
