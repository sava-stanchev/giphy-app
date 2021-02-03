import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { loadPage, renderGIFDetails } from './events/navigation-events.js';
import { HOME, q } from './common/constants.js';
import { renderCurrentUpload, showPreview, hidePreview } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', e => {

    if (e.target.classList.contains('nav-link') ||
    e.target.classList.contains('navbar-brand')) {
      loadPage(e.target.getAttribute('data-page'));
    }

    if (e.target.classList.contains('giphy-image')) {
      renderGIFDetails(e.target.getAttribute('data-gif-id'));
    }

    if (e.target.classList.contains('favorite')) {
      toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));
    }

    if (e.target.classList.contains('upload-btn')) {
      renderCurrentUpload();
    }

    if (q('.modal-open')) {
      if (e.target.classList.contains('close-modal')) {
        q('#my-modal').classList.remove('modal-open');
        hidePreview();
      }
    }

    if (q('#file-upload')) {
      if (e.target.classList.contains('upload-file')) {
        document
            .getElementById('file-upload')
            .addEventListener('input', () => showPreview());
      }
    }
  });

  document.getElementById('btnSearch').addEventListener('click', e => {
    e.preventDefault();
    const input = document.getElementById('search').value;
    renderSearchItems(input);
    document.querySelector('#search').value = '';
  });

  loadPage(HOME);
});
