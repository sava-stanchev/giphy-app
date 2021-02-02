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
  }
  // check the size
  // check the type
};

export const showMessage = (message) => {
  q('#upload-message').innerHTML = message;
  q('#my-modal').classList.add('modal-open');
};

// export const renderUserInfo = (GIF) => {

//   return GIF.hasOwnProperty('user')
//     ? `<div class=avatar-holder>
//         <img class="avatar" src=${GIF.user.avatar_url} alt="UA">
//       </div>
//       <a class="username" href=${GIF.user.profile_url}>${GIF.username}</a>`
//     : `<div class=avatar-holder>
//       </div>
//       <a class="username" href="#">${GIF.username}</a>`;
// }