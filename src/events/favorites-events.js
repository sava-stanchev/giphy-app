import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from '../data/favorites.js';

import { q } from '../common/constants.js';
import { renderFavoriteStatus } from './helpers.js';

/**
 * Toggles the status of a GIF by filling or emptying a heart icon
 *
 * @author Dimitar Stanoev
 * @param {string} gifId the unique identificator of the GIF
 * @return {void}
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }

  q(`span[data-gif-id="${gifId}"]`).innerHTML = renderFavoriteStatus(gifId);
};
