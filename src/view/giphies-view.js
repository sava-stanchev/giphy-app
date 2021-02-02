import { renderFavoriteStatus } from '../events/helpers.js';

export const toGiphySimple = (GIF) => `
<a href="#" class="giphy-simple" >
  <div class="wrapper">
    ${renderFavoriteStatus(GIF.id)} 
    <img class="giphy-image" data-gif-id=${GIF.id} src=${GIF.images.fixed_width.url}>
    <div class="user-info"></div>
  </div>
</a>
`;

export const toSingleGifView = (GIF) => `
<div id="single-gif">
  <h1>${GIF.title}</h1>
  <div class="single-gif-content content">
    ${toGifDetailed(GIF)}
  </div>
</div>`;


const toGifDetailed = (GIF) => `
<div class="gif-detailed">
  <div class="gif-image">
    <img src="${GIF.images.original.url}">
  </div>
  <div class="gif-info">
    <div class="col"><p>Username: ${GIF.username || 'unknown'}</p>
    <p>Uploaded: ${GIF.import_datetime.substring(0, 10)}</p></div>
    <div class="col"><p>Dimensions: ${GIF.images.downsized_large.width} x 
    ${GIF.images.downsized_large.height} px</p>
    <p>Rating: ${GIF.rating.toUpperCase() || 'unknown'}</p></div>
  </div>
</div>`;
