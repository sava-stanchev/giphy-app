import { HOME, TRENDING, q, FAVORITES } from "../common/constants.js";
import { loadSingleGIF, loadTrendingGIFs } from "../requests/request-service.js";
import { toGiphySimple, toSingleGifView } from "../view/giphies-view.js";
import { toTrendingView } from "../view/trending-view.js";

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

  }
}

export const renderTrending = () => {
  loadTrendingGIFs()
  .then(res => {    
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(res.data);
  });
};

export const renderGIFDetails = (gifId = null) => {
  loadSingleGIF(gifId)
    .then(res => 
      q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(res.data));
};