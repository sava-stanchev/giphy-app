import { toGiphySimple } from './giphies-view.js';

export const toUploadedGifsView = (gifs) => `
<div id="uploaded-gifs">
  <h1>Uploaded GIFs:</h1>
  <div class="content">
    ${gifs.map(toGiphySimple).join('\n') || '<p>Make an upload to see the GIF here</p>'}
  </div>
</div>
`;
