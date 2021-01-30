import { toGiphySimple } from './giphies-view.js';

export const toSearchView = (gifs, searchTerm) => `
<div id="gifs">
  <h1>GIFs found for "${searchTerm}":</h1>
  <div class="content">
    ${gifs.map(toGiphySimple).join('\n')}
  </div>
</div>
`;
