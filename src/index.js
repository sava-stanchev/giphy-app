import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { loadPage, renderGIFDetails } from './events/navigation-events.js';
import { q, HOME } from './common/constants.js';
import { uploadGif } from './requests/request-service.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', e => {

      e.preventDefault();

        if (e.target.classList.contains('nav-link') 
        || e.target.classList.contains('navbar-brand')) {
            loadPage(e.target.getAttribute('data-page'));
        }

        if (e.target.classList.contains('giphy-image')) {
            renderGIFDetails(e.target.getAttribute('data-gif-id'));
        }

        if (e.target.classList.contains('favorite')) {
            toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));
        }

        if (e.target.classList.contains('upload-btn')) {
            uploadGif();
        }

    });

    document.getElementById('btnSearch').addEventListener('click', e => {
        e.preventDefault();
        const input = document.getElementById('search').value;
        renderSearchItems(input);
    });

    loadPage(HOME);
});
