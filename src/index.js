import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { renderGIFDetails } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', e => {

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

    q('input#search').addEventListener('input', e => {
        renderSearchItems(e.target.value);
    });

    loadPage(HOME);

});