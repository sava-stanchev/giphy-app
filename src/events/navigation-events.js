import { HOME, TRENDING, q, FAVORITES, CONTAINER_SELECTOR, UPLOAD, UPLOADED, ABOUT } from '../common/constants.js';
import { loadFavoriteOrRandomGifs, loadSingleGif, loadTrendingGifs, loadUploadedGifs } from '../requests/request-service.js';
import { toFavoritesView, toRandomView } from '../view/favorites-view.js';
import { toSingleGifView } from '../view/giphies-view.js';
import { toHomeView } from '../view/home-view.js';
import { toTrendingView } from '../view/trending-view.js';
import { toUploadView } from '../view/upload-view.js';
import { setActiveNav, showMessage } from './helpers.js';
import { toUploadedGifsView } from '../view/uploaded-view.js';
import { toAboutView } from '../view/about-view.js';
import { toMessageView } from '../view/message-view.js';


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
      return renderUploadPage();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    default: return null;
  }
};

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async () => {

  const trendingGifs = await loadTrendingGifs();
  if (trendingGifs) {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs.data);
  } else {
    q(CONTAINER_SELECTOR).innerHTML = toMessageView();
    showMessage('Something went wrong!');
  }
};

/**
 * @author Dimitar Stanoev
 * Renders single GIF details
 * @return {null} does not return a value
 */
export const renderGIFDetails = async (gifId = null) => {
  const singleGifDetails = await loadSingleGif(gifId);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(singleGifDetails.data);
};

const renderUploadPage = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * @author Dimitar Stanoev
 * Renders uploaded GIFs
 * @return {null} does not return a value
 */
export const renderUploaded = async () => {
  const uploadedGifs = await loadUploadedGifs();

  q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(uploadedGifs.data);
};

const renderFavorites = async () => {
  let favoriteGifs = await loadFavoriteOrRandomGifs();
  favoriteGifs = favoriteGifs.data;
  if (Array.isArray(favoriteGifs)) {
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs);
  } else {
    q(CONTAINER_SELECTOR).innerHTML = toRandomView([favoriteGifs]);
  }
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
