import { EMPTY_HEART, FULL_HEART, qs } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';

export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
      );
};

export const renderFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
  
    return favorites.includes(gifId)
      ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
      : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};