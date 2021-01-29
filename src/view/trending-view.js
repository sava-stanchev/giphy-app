import { toGiphySimple } from './giphies-view.js';

export const toTrendingView = (GIFs) => `
  <div id="GIFs">
    <h1>Trending GIFs</h1>
    <div class="content">
      ${GIFs.map(toGiphySimple).join('\n')}
    </div>
  </div>
`;