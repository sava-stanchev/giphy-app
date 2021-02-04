import {
  HOME,
  TRENDING,
  q,
  FAVORITES,
  CONTAINER_SELECTOR,
  UPLOAD,
  UPLOADED,
  ABOUT,
} from '../common/constants.js';

import {
  loadFavoriteOrRandomGifs,
  loadSingleGif,
  loadTrendingGifs,
  loadUploadedGifs,
} from '../requests/request-service.js';

import { toFavoritesView, toRandomView } from '../view/favorites-view.js';
import { toSingleGifView } from '../view/giphies-view.js';
import { toHomeView } from '../view/home-view.js';
import { toTrendingView } from '../view/trending-view.js';
import { toUploadView } from '../view/upload-view.js';
import { setActiveNav, showMessage } from './helpers.js';
import { toUploadedGifsView } from '../view/uploaded-view.js';
import { toAboutView } from '../view/about-view.js';
import { toErrorMessageView } from '../view/message-view.js';

/**
 * @author Dimitar Stanoev
 * Loads a page following a click on one of navbar's tabs
 * @param {string} page that represents the name of the tab
 * @return {function} render function that displays the desired page
 */
export const loadPage = (page = '') => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    default: return null;
  }
};

/**
 * @author Dimitar Stanoev
 * Renders the home view
 * @return {void}
 */
const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

/**
 * @author Delyana Yordanova
 * Renders view with trending Gifs and calls a function
 * to show a message to the user in case of unsuccessful request
 * @return {void}
 */
const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();

  if (trendingGifs) {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs.data);
  } else {
    q(CONTAINER_SELECTOR).innerHTML = toErrorMessageView();
    showMessage('Something went wrong!');
  }
};

/**
 * @author Dimitar Stanoev
 * Renders single GIF details
 * @param {string} gifId to call loadSingleGif with
 * @return {void}
 */
export const renderGIFDetails = async (gifId = null) => {
  const { data } = await loadSingleGif(gifId);
  if (data) {
    q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(data);
  } else {
    q(CONTAINER_SELECTOR).innerHTML = toErrorMessageView();
    showMessage('Something went wrong!');
  }
};

/**
 * @author Delyana Yordanova
 * Renders view with form to upload a file
 * @return {void}
 */
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * @author Dimitar Stanoev
 * Renders uploaded GIFs
 * @return {void}
 */
export const renderUploaded = async () => {
  const { data } = await loadUploadedGifs();
  if (data) {
    q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(data);
  } else {
    q(CONTAINER_SELECTOR).innerHTML = toErrorMessageView();
    showMessage('Something went wrong!');
  }
};

/**
 * Renders favorites or a random GIF.
 *
 * @author Sava Stanchev
 * @return {void}
 */
const renderFavorites = async () => {
  const favoriteGifs = await loadFavoriteOrRandomGifs();
  if (favoriteGifs) {
    const { data } = favoriteGifs;
    if (Array.isArray(data)) {
      q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(data);
    } else {
      q(CONTAINER_SELECTOR).innerHTML = toRandomView(data);
    }
  } else {
    q(CONTAINER_SELECTOR).innerHTML = toErrorMessageView();
    showMessage('Something went wrong!');
  }
};

/**
 * Renders the about view
 *
 * @author Dimitar Stanoev
 * @return {void}
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
