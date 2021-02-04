import { CONTAINER_SELECTOR, q } from '../common/constants.js';
import { loadSearchGifs } from '../requests/request-service.js';
import { toSearchView } from '../view/search-view.js';

/**
 * Renders the GIFs being searched for.
 * 
 * @author Sava Stanchev
 * @param {string} searchTerm - Text written in the input field.
 * @returns {void} 
 */
export const renderSearchItems = async (searchTerm) => {
  const gifs = await loadSearchGifs(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm);
};
