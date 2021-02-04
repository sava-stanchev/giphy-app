import { EMPTY_HEART, FULL_HEART, q, qs } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';

/**
 * Sets active or not to the navigaton menu.
 *
 * @author Sava Stanchev
 * @param {string} page - The page to be set.
 * @return {void}
 */
export const setActiveNav = (page) => {
  const nav = qs('a.nav-link');

  Array
      .from(nav)
      .forEach((element) => element
          .getAttribute('data-page') === page ?
          element.classList.add('active') :
          element.classList.remove('active')
      );
};

/**
 * Shows whether a GIF is added to favorites or not.
 *
 * @author Sava Stanchev
 * @param {string} gifId - The ID of a GIF.
 * @return {boolean} - A boolean indicating whether the GIF is
 *                     in favorites or not.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)?
    `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`:
    `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};

/**
 * Checks if a file exists and if it is a valid type, or a valid size
 *
 * @author Delyana Yordanova
 * @param {object} file to validate
 * @return {boolean} returns true if all statements evaluate to true and
 *                   false if some statement evaluates to false
 */
export const isValidFile = (file) => {
  if (!file) {
    showMessage('Please select a file to upload!');
    return false;
  }

  if (file.size > 104857600) {
    showMessage('Please select a file up to 100MB!');
    return false;
  }

  if (!file.type === 'image/gif' && !file.type === 'video/*') {
    showMessage('Please choose a .gif or a video file!');
    return false;
  }

  return true;
};

/**
 * Shows message to the user
 *
 * @author Delyana Yordanova
 * @param {string} message to show
 * @return {void}
 */
export const showMessage = (message) => {
  q('#message').innerHTML = message;
  q('#my-modal').classList.add('modal-open');
};
