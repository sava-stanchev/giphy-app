import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';

export const renderFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
  
    return favorites.includes(gifId)
      ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
      : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};