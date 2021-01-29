export const toGiphySimple = () =>`
  <div class="giphy-simple">
    <a class="wrapper" href=${data.user.profile_url}>
      ${renderFavoriteStatus(data.id) /**should have class favorite!!!!!! */} 
      <img class="giphy-image" src=${data.image_url}>
      <div class="user-info">
        <div class=avatar-holder>
          <img class="avatar" src=${data.user.avatar_url}>
        </div>
        <div class="username">${data.user.username}</div>
      </div>
    </a>
  </div>
`;