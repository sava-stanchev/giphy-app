import { addFavorite, removeFavorite, getFavorites } from '../data/favorites.js';
import { q } from '../common/constants.js';
import { renderFavoriteStatus } from './helpers.js';

export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }

  q(`span[data-gif-id="${gifId}"]`).innerHTML = renderFavoriteStatus(gifId);
};
