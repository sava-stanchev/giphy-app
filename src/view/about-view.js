/**
 * Provides the HTML template for the about page
 *
 * @author Delyana Yordanova
 * @return {string} returns the HTML template
 */
export const toAboutView = () => `
<div id="about">
  <h1>About Us</h1>
  <div class="content">
    <div class="content-inner">
        <div class="author">
          <img src="./images/profile_pic_Sava.png" alt="profile picture">
          <p>Sava Stanchev</p>
        </div>
        <div class="author">
          <img src="./images/profile_pic_Delyana.png" alt="profile picture">
          <p>Delyana Yordanova</p>
        </div>
        <div class="author">
          <img src="./images/profile_pic_Dimitar.png" alt="profile picture">
          <p>Dimitar Stanoev</p>
        </div>
    </div>
  </div>
</div>
`;
