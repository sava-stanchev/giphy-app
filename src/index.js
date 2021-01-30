import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { renderGIFDetails } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', e => {
        
        if (e.target.classList.contains('')) {
            renderGIFDetails(e.target.getAttribute('data-gif-id'));
        }

        if (e.target.classList.contains('favorite')) {
            toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));
        }

  
    });
  
    q('input#search').addEventListener('input', e => {
      renderSearchItems(e.target.value);
    });
  
    loadPage(HOME);
  
  });