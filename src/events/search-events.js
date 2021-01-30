import { CONTAINER_SELECTOR, q } from '../common/constants.js';
import { loadSearchGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';

export const renderSearchItems = (searchTerm) => {
  loadSearchGifs(searchTerm)
    .then(gifs => q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm));
};
