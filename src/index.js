import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { loadPage, renderGIFDetails } from './events/navigation-events.js';
import { q, HOME } from './common/constants.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', e => {

      e.preventDefault();

        if (e.target.classList.contains('nav-link')) {
            loadPage(e.target.getAttribute('data-page'));
        }

        if (e.target.classList.contains('giphy-image')) {
            renderGIFDetails(e.target.getAttribute('data-gif-id'));
        }

        if (e.target.classList.contains('favorite')) {
            toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));
        }

    });

    // q('input#search').addEventListener('input', e => {
    //     renderSearchItems(e.target.value);
    // });

    loadPage(HOME);

});