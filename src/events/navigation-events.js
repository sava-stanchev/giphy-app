import { q } from "../common/constants.js";
import { loadSingleGIF, loadTrendingGIFs } from "../requests/request-service.js";
import { toGiphySimple, toSingleGifView } from "../view/giphies-view.js";
import { toTrendingView } from "../view/trending-view.js";

const renderTrending = () => {
  loadTrendingGIFs()
  .then(res => {
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(res.data);
  });
};

export const renderGIFDetails = (gifId = null) => {
  loadSingleGIF(gifId)
    .then(res => 
      q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(res));
};