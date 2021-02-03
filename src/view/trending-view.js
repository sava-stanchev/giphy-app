import { toGiphySimple } from './giphies-view.js';

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
