let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds favorite GIFs to local storage.
 * 
 * @author Sava Stanchev
 * @param {string} gifId - The ID of a GIF.
 * @return {void}
 */
export const addFavorite = (gifId) => {
  if (favorites.find((id) => id === gifId)) {
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes favorite GIFs from local storage.
 * 
 * @author Sava Stanchev
 * @param {string} gifId - The ID of a GIF.
 * @return {void}
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter((id) => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Gets favorite GIFs and places them into an array.
 * 
 * @author Sava Stanchev
 * @return {array} - An array that contains the IDs of favorite GIFs.
 */
export const getFavorites = () => [...favorites];
