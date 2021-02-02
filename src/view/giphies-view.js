import { renderFavoriteStatus } from '../events/helpers.js';

export const toGiphySimple = (gif) => `
<a href="#" class="giphy-simple" >
  <div class="wrapper">
    ${renderFavoriteStatus(gif.id)} 
    <img class="giphy-image" data-gif-id=${gif.id} src=${gif.images.fixed_width.url}>
    <div class="user-info"></div>
  </div>
</a>
`;

export const toSingleGifView = (gif) => `
<div id="single-gif">
  <h1>${gif.title}</h1>
  <div class="single-gif-content content">
    ${toGifDetailed(gif)}
  </div>
</div>`;


const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="gif-image">
    <img src="${gif.images.original.url}">
  </div>
  <div class="gif-info">
    <div class="col"><p>Username: ${gif.username || 'unknown'}</p>
    <p>Uploaded: ${gif.import_datetime.substring(0, 10)}</p></div>
    <div class="col"><p>Dimensions: ${gif.images.downsized_large.width} x 
    ${gif.images.downsized_large.height} px</p>
    <p>Rating: ${gif.rating.toUpperCase() || 'unknown'}</p></div>
  </div>
</div>`;
