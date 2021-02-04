import { toGiphySimple, toGifDetailed } from './giphies-view.js';

/**
 * Provides an HTML template for the favorite GIFs to be displayed in.
 * 
 * @author Sava Stanchev
 * @param {array} gifs - The GIFs to be displayed.
 * @return {string} - The HTML template, in which the GIFs are rendered. 
 */
export const toFavoritesView = (gifs) => `
<div id="GIFs">
  <h1>Favorite GIFs:</h1>
  <div class="content">
    <div class="content-inner">
        ${gifs.map(toGiphySimple).join('\n')}
    </div>
  </div>
</div>
`;

/**
 * Provides an HTML template for the random GIF to be displayed in.
 * 
 * @author Sava Stanchev
 * @param {array} gif - The GIF to be displayed.
 * @return {string} - The HTML template, in which the GIF is rendered. 
 */
export const toRandomView = (gif) => `
<div id="single-gif">
  <h1>No favorites yet. Here's a random gif:</h1>
  <div class="single-gif-content content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;
