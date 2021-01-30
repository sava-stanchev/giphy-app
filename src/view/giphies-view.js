import { renderFavoriteStatus } from "../events/helpers";

export const toGiphySimple = (GIF) =>`
  <div class="giphy-simple" data-giphy-id=${GIF.id}>
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
  <h1>${GIF.data[0].title}</h1>
  <div class="single-gif-content">
    ${toGifDetailed(GIF)}
  </div>
</div>`
}

const toGifDetailed = (GIF) => {
  `<div class="gifx-detailed">
  <div class="gif-image">
    <img src="${GIF.data[0].images.original.url}">
  </div>
  <div class="gif-info">
    <p>Username: ${GIF.data[0].username}</p>
    <p>Size: ${GIF.data[0].images.original.size}</p>
    <p>Upload datetime: ${GIF.data[0].import_datetime}</p>
    <p>Rating: ${GIF.data[0].rating.toUpperCase()}</p>
  </div>
</div>`
};