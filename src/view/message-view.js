/**
 * @author Delyana Yordanova
 * Provides the HTML template for the upload view
 * @return {string} the HTML template, in which the uploaded GIFs
 * are rendered
 */
export const toErrorMessageView = () => `
<h1>Upload your GIFs and Stickers</h1>
<div class="content upload">
  <div class="content-inner">
    ${errorMessage}    
  </div>
</div>
`;
export const errorMessage = `
  <div id="my-modal" class="modal">
    <div class="modal-content">
      <span class="close-error-message">&times;</span>
      <p id="message"></p>
    </div>
  </div>
`;
