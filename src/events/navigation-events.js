import { HOME, TRENDING, q, FAVORITES, CONTAINER_SELECTOR, UPLOAD, UPLOADED, ABOUT } from '../common/constants.js';
import { loadFavoriteGifs, loadSingleGIF, loadTrendingGIFs, loadUploadedGifs } from '../requests/request-service.js';
import { toFavoritesView } from '../view/favorites-view.js';
import { toSingleGifView } from '../view/giphies-view.js';
import { toHomeView } from '../view/home-view.js';
import { toTrendingView } from '../view/trending-view.js';
import { toUploadView } from '../view/upload-view.js';
import { setActiveNav } from './helpers.js';
import { toUploadedGifsView } from '../view/uploaded-view.js'
import { toAboutView } from '../view/about-view.js';


export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING:
      setActiveNav(TRENDING)
      return renderTrending();

    case FAVORITES:
      setActiveNav(FAVORITES)
      return renderFavorites();

    case UPLOADED:
      setActiveNav(UPLOADED)
      return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD)
      return renderUploadPage();

    case ABOUT:
      setActiveNav(ABOUT)
      return renderAbout();
  }
};

export const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

export const renderTrending = async () => {
  const trendingGifs = await loadTrendingGIFs();

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs.data);
};

export const renderGIFDetails = async (gifId = null) => {
  const singleGifDetails = await loadSingleGIF(gifId);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(singleGifDetails.data);
};

export const renderUploadPage = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

export const renderUploaded = async () => {
  const uploadedGifs = await loadUploadedGifs();

  q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(uploadedGifs.data);
};

export const renderFavorites = async () => {
  const favoriteGifs = await loadFavoriteGifs();

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs.data);
};

export const renderAbout = () => {
q(CONTAINER_SELECTOR).innerHTML = toAboutView();
}