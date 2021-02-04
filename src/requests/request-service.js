import { API_URL, API_KEY } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { addToUploadedGifs, getUploaded } from '../data/uploaded.js';

/**
 * Sends GET request to retrieve data using the trending endpoint
 *
 * @author Delyana Yordanova
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
 * Sends GET request to retrieve data by GIF ID
 *
 * @author Dimitar Stanoev
 * @param {string} gifId that is added in the URL
 * @return {Promise|boolean} promise object containing the response data
 *                           or boolean indicating that has been an error
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
 * @return {(Promise|boolean)} - Promise object containing the response data
 *                               or a boolean indicating failure.
 */
export const loadSearchGifs = async (searchTerm = '') => {
  try {
    const res = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=30`);
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
 * Sends POST request to upload a file
 *
 * @author Delyana Yordanova
 * @param {object} formData object containing key/value pairs
 *                          representing form fields and their values
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
 * Sends GET request to retrieve data by GIF IDs
 *
 * @author Dimitar Stanoev
 * @return {Promise|boolean} promise object containing the response data
 *                           or boolean indicating there has been an error
 */
export const loadUploadedGifs = async () => {
  try {
    const res = await fetch(`${API_URL}?api_key=${API_KEY}&ids=${getUploaded().join(',')}`);

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
 * Sends a GET request to either retrieve a random GIF or GIFs by ID
 * depending on whether there are any favorites in the local storage or not.
 *
 * @author Sava Stanchev
 * @return {(Promise|boolean)} - Promise object containing the response data
 *                               or a boolean indicating failure.
 */
export const loadFavoriteOrRandomGifs = async () => {
  try {
    const res = getFavorites().length === 0 ?
    await fetch(`${API_URL}/random?api_key=${API_KEY}`) :
    await fetch(`${API_URL}?api_key=${API_KEY}&ids=${getFavorites().join(',')}`);
    if (!res.ok) {
      throw new Error('Error');
    }

    return res.json();
  } catch (err) {
    console.log(err);

    return false;
  }
};
