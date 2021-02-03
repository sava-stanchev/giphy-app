import { renderFavoriteStatus } from '../events/helpers.js';

/**
 * @author Delyana Yordanova
 * Provides HTML template for a GIF to be displayed
 * @param {object} gif - an object that contains data about the GIF
 * @return {string} returns the HTML template, in which the GIF is rendered
 */
export const toGiphySimple = (gif) => `
<a href="#" class="giphy-simple" >
  <div class="wrapper">
    ${renderFavoriteStatus(gif.id)} 
    <img class="giphy-image" data-gif-id=${gif.id} src=${gif.images.fixed_width.url}>
  </div>
</a>
`;

/**
 * @author Dimitar Stanoev
 * Provides HTML template for a single GIF to be displayed
 * @param {object} gif - an object that contains data about the gif
 * @return {string} the HTML template, in which the GIF is rendered
 */
export const toSingleGifView = (gif) => `
<div id="single-gif">
  <h1>${gif.title}</h1>
  <div class="single-gif-content content">
    ${toGifDetailed(gif)}
  </div>
</div>`;

/**
 * @author Dimitar Stanoev
 * Provides GIF details
 * @param {object} an object that contains the response data
 * @return {string} the HTML template, which includes detailed
 * information about the GIF
 */
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
