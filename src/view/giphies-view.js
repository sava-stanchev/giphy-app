// import { renderFavoriteStatus } from ...

export const toGiphySimple = (GIF) =>`
  <div class="giphy-simple">
    <a class="wrapper" href=${GIF.data.user.profile_url}>
      ${renderFavoriteStatus(GIF.data.id) /**should have class favorite!!!!!! */} 
      <img class="giphy-image" src=${GIF.data.image_url}>
      <div class="user-info">
        <div class=avatar-holder>
          <img class="avatar" src=${GIF.data.user.avatar_url}>
        </div>
        <div class="username">${GIF.data.user.username}</div>
      </div>
    </a>
  </div>
`;