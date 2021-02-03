/**
 * @author Delyana Yordanova
 * Provides the HTML template for the upload view
 * @return {string} the HTML template, in which the uploaded GIFs
 * are rendered
 */
export const toMessageView = () => `
<h1>Upload your GIFs and Stickers</h1>
<div class="content upload">
  <div class="content-inner">
    ${message}    
  </div>
</div>
`;
export const message = `
  <div id="my-modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <p id="upload-message"></p>
    </div>
  </div>
`;
