import { EMPTY_HEART, FULL_HEART, q, qs } from '../common/constants.js';
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
    ?`<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    :`<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};

export const isValidFile = (file) => {
  if (!file) {
    showMessage('Please select a file to upload!');
    return false;
  }

  if (file.size > 104857600) {
    showMessage('Your file is larger than 100MB');
    return false;
  }

  if (!file.type === 'image/gif' && !file.type === 'video/*') {
    showMessage('Invalid file type');
    return false;
  }

  return true;
};

export const showMessage = (message) => {
  q('#message').innerHTML = message;
  q('#my-modal').classList.add('modal-open');
};
