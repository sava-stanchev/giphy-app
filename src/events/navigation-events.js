import { q } from "../common/constants.js";
import { loadTrendingGIFs } from "../requests/request-service.js";
import { toGiphySimple } from "../view/giphies-view.js";
import { toTrendingView } from "../view/trending-view.js";

const renderTrending = () => {
  loadTrendingGIFs()
  .then(res => {    
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(res.data);
  });
};