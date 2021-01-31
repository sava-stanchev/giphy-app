import { toGiphySimple } from './giphies-view.js';

export const toSearchView = (GIFs, searchTerm) => `
  <div id="GIFs">
    <h1>GIFs found for "${searchTerm}":</h1>
    <div class="content">
      <div class="content-inner">
        ${GIFs.data.map(toGiphySimple).join('\n')}
      </div>
    </div>
  </div>
`;
