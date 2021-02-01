import { HOME, TRENDING, q, FAVORITES, CONTAINER_SELECTOR, UPLOAD } from '../common/constants.js';
import { loadSingleGIF, loadTrendingGIFs } from '../requests/request-service.js';
import { toGiphySimple, toSingleGifView } from '../view/giphies-view.js';
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

    // case UPLOADED:
    //   setActiveNav(UPLOADED)
    //   return renderUploaded();

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
