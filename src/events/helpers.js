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

/**
 * @author Delyana Yordanova
 * Checks if a file exists and if it is a valid type, or size,
 * @param {object} file to validate
 * @return {boolean} returns true if all statements evaluate to true and
 * false if some of the statements evaluates to false
 */
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

/**
 * @author Delyana Yordanova
 * Shows message to the user
 * @param {string} message to show
 * @return {void}
 */
export const showMessage = (message) => {
  q('#message').innerHTML = message;
  q('#my-modal').classList.add('modal-open');
};
