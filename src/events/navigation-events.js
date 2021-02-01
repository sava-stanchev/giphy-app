import { HOME, TRENDING, q, FAVORITES, CONTAINER_SELECTOR, UPLOAD, UPLOADED } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { getUploaded } from '../data/uploaded.js';
import { loadSingleGIF, loadTrendingGIFs } from '../requests/request-service.js';
import { toFavoritesView } from '../view/favorites-view.js';
import { toSingleGifView } from '../view/giphies-view.js';
import { toHomeView } from '../view/home-view.js';
import { toTrendingView } from '../view/trending-view.js';
import { toUploadView } from '../view/upload-view.js';
import { setActiveNav } from './helpers.js';


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
      return renderUpload();

    // case ABOUT:
    //   setActiveNav(ABOUT)
    //   return renderAbout();

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

export const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

export const renderUploaded = () => {
  const uploadedGifs = await loadUploadedGifs();

  q(CONTAINER_SELECTOR).innerHTML = toUploadedViews(uploadedGifs.data);
}

const renderFavorites = () => {
  const favorites = getFavorites();
  console.log(favorites);
  Promise.all(favorites.map(id => loadSingleGIF(id)))
    .then(GIFs => q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(GIFs));
};