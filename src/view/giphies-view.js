import { renderFavoriteStatus } from "../events/helpers.js";

export const toGiphySimple = (GIF) =>`
  <div class="giphy-simple" data-gif-id=${GIF.id}>
    <div class="wrapper">
      ${renderFavoriteStatus(GIF.id) /**should have class favorite!!!!!! */} 
      <img class="giphy-image" src=${GIF.images.original.url}>
      <div class="user-info">
        <div class=avatar-holder>
          <img class="avatar" src=${GIF.user.avatar_url} alt="UA">
        </div>
        <a class="username" href=${GIF.user.profile_url}>${GIF.username}</a>
      </div>
    </div>
  </div>
`;

export const toSingleGifView = (GIF) => {
  `<div id="single-gif">
  <h1>${GIF.title}</h1>
  <div class="single-gif-content">
    ${toGifDetailed(GIF)}
  </div>
</div>`
}

const toGifDetailed = (GIF) => {
  `<div class="gif-detailed">
  <div class="gif-image">
    <img src="${GIF.images.original.url}">
  </div>
  <div class="gif-info">
    <p>Username: ${GIF.username}</p>
    <p>Size: ${GIF.images.original.size}</p>
    <p>Upload datetime: ${GIF.import_datetime}</p>
    <p>Rating: ${GIF.rating.toUpperCase()}</p>
  </div>
</div>`
};