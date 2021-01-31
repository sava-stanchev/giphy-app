import { toGiphySimple } from './giphies-view.js';

export const toTrendingView = (GIFs) => `
  <div id="GIFs">
    <h1>Trending GIFs</h1>
    <div class="content">
      <div class="content-inner">
        ${GIFs.map(toGiphySimple).join('\n')}
      </div>
    </div>
  </div>
`;