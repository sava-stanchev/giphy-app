import { toGiphySimple, toGifDetailed } from './giphies-view.js';

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

export const toRandomView = (gif) => `
<div id="single-gif">
  <h1>No favorites yet. Here's a random gif:</h1>
  <div class="single-gif-content content">
    ${toGifDetailed(gif)}
  </div>
</div>`;
