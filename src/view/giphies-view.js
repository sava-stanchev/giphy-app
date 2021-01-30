import { renderFavoriteStatus } from "../events/helpers";

export const toGiphySimple = (GIF) =>`
  <div class="giphy-simple data-giphy-id="${GIF.id}"">
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