import { API_URL, API_KEY } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { addToUploadedGifs, getUploaded } from '../data/uploaded.js';

/**
 * @author Delyana Yordanova
 * Sends GET request to retrieve data using the trending endpoint
 * @return {Promise} promise object containing the response data
 * in case of successful request or false in case of unsuccessful request
 */
export const loadTrendingGifs = async () => {
  try {
    const res = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=30&rating=g`);

    if (!res.ok) {
      throw new Error('Error');
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
 * @param {string} gifId that is added in the URL
 * @return {Promise} promise object containing the response data
 */
export const loadSingleGif = async (gifId) => {
  try {
    const res = await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error('Error');
    }

    return res.json();
  } catch (error) {
    console.log(error);

    return false;
  }
};

/**
 * Sends a GET request to retrieve data by search query term.
 * 
 * @author Sava Stanchev
 * @param {string} searchTerm - Text written in the input field.
 * @returns {Promise} - Promise object containing the response data.
 */
export const loadSearchGifs = async (searchTerm = '') => {
  const res = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=30`);

  return res.json();
};

/**
 * @author Delyana Yordanova
 * Sends POST request to upload a file
 * @param {object} formData object containing key/value pairs
 * representing form fields and their values
 * @return {boolean} boolean object indicating success or failure
 */
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

/**
 * Sends a GET request to either retrieve a random GIF or GIFs by ID 
 * depending on whether there are any favorites in the local storage or not.
 * 
 * @author Sava Stanchev
 * @returns {Promise} - Promise object containing the response data.
 */
export const loadFavoriteOrRandomGifs = async () => {
  let res;
  if (getFavorites().length === 0) {
    res = await fetch(`${API_URL}/random?api_key=${API_KEY}`);
  } else {
    res = await fetch(`${API_URL}?api_key=${API_KEY}&ids=${getFavorites().join(',')}`);
  }

  return res.json();
};
