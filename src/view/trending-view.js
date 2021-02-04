import { toGiphySimple } from './giphies-view.js';

/**
 * @author Delyana Yordanova
 * Provides HTML template for displaying trending GIFs
 * @param {object} gifs - an array of objects, containing data about each GIF
 * @return {string} returns the HTML template
 */
export const toTrendingView = (gifs) => `
  <div id="GIFs">
    <h1>Trending GIFs</h1>
    <div class="content">
      <div class="content-inner">
        ${gifs.map(toGiphySimple).join('\n')}
      </div>
    </div>
  </div>
`;
