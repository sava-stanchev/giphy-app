// import { renderFavoriteStatus } from ...

export const toGiphySimple = (GIF) =>`
  <div class="giphy-simple">
    <a class="wrapper" href=${GIF.user.profile_url}>
      ${renderFavoriteStatus(GIF.id) /**should have class favorite!!!!!! */} 
      <img class="giphy-image" src=${GIF.images.original.url}>
      <div class="user-info">
        <div class=avatar-holder>
          <img class="avatar" src=${GIF.user.avatar_url} alt="UA">
        </div>
        <div class="username">${GIF.username}</div>
      </div>
    </a>
  </div>
`;