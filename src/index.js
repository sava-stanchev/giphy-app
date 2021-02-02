import { renderSearchItems } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { loadPage, renderGIFDetails } from './events/navigation-events.js';
import { HOME, q } from './common/constants.js';
import { renderCurrentUpload } from './events/upload-events.js';

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
      e.preventDefault();
      // const file = document.forms['upload-form']['file-upload'].files[0];
      // renderCurrentUpload(file);
      renderCurrentUpload();
    }

    if (q('.modal-open')) {
      if (e.target.classList.contains('close-modal')) {
        // ||!e.target.classList.contains('modal-content')
        q('#my-modal').classList.remove('modal-open');
      }
    }
  });

  document.getElementById('btnSearch').addEventListener('click', e => {
    e.preventDefault();
    const input = document.getElementById('search').value;
    renderSearchItems(input);
  });

  if (q('#upload-form')) {
    document.getElementById('file-upload').addEventListener('input', () => {
      console.log('changed');
      //const file = document.forms['upload-form']['file-upload'].files[0];
      // previewFile(file);
    });
  }

  loadPage(HOME);
});
