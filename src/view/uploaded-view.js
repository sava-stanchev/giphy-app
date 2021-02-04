import { toGiphySimple } from './giphies-view.js';

/**
 * Provides the HTML template for the uploaded GIFs
 *
 * @author Dimitar Stanoev
 * @param {array} gifs - array of objects representing the uploaded GIFs
 * @return {string} the HTML template, in which the uploaded GIFs
 *                  are rendered
 */
export const toUploadedGifsView = (gifs) => `
<div id="uploaded-gifs">
  <h1>Uploaded GIFs</h1>
  <div class="content">
    <div class="content-inner">
      ${gifs.map(toGiphySimple).join('\n') ||
       '<p class="uploaded-msg">Make an upload to see the GIF here</p>'}
    </div>
  </div>
</div>
`;
