import { toGiphySimple } from './giphies-view.js';

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
