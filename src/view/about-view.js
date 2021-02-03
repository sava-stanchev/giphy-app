/**
 * @author Delyana Yordanova
 * Provides the HTML template for the about page
 * @return {string} the HTML template,
 * in which the about content is rendered
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
