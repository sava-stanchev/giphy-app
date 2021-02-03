import { toGiphySimple } from "./giphies-view.js";

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

export const toRandomView = (gifs) => `
<div id="GIFs">
  <h1>No favorites yet. Here's a random GIF:</h1>
  <div class="content">
    <div class="content-inner">
        ${gifs.map(toGiphySimple).join('\n')}
    </div>
  </div>
</div>
`;
