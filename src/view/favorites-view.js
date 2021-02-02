import { toGiphySimple } from "./giphies-view.js";

export const toFavoritesView = (gifs) => `
<div id="GIFs">
  <h1>Favorite GIFs:</h1>
  <div class="content">
    <div class="content-inner">
        ${gifs.map(toGiphySimple).join('\n') || "<p>No favorites. Here's a random GIF for you.</p>"}
    </div>
  </div>
</div>
`;