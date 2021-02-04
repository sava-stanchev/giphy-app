import { toGiphySimple } from './giphies-view.js';

/**
 * Provides an HTML template for the found GIFs to be displayed in.
 * 
 * @author Sava Stanchev
 * @param {object} gifs - An object containing the data needed.
 * @param {string} searchTerm - Text written in the input field.
 * @return {string} - The HTML template, in which the GIFs are rendered.
 */
export const toSearchView = (gifs, searchTerm) => `
  <div id="GIFs">
    <h1>GIFs found for "${searchTerm}":</h1>
    <div class="content">
      <div class="content-inner">
        ${gifs.data.map(toGiphySimple).join('\n')}
      </div>
    </div>
  </div>
`;
