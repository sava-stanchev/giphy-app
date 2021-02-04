/**
 * @author Delyana Yordanova
 * Provides the HTML template for the upload view
 * @return {string} returns the HTML template
 */
export const toUploadView = () => `
<h1>Upload your GIFs and Stickers</h1>
<div class="content upload">
  <div class="content-inner">
    ${uploadForm()}
    ${uploadMessage()}    
  </div>
</div>
`;

/**
 * @author Delyana Yordanova
 * Provides the HTML template for the upload form
 * @return {string} returns the HTML template
 */
export const uploadForm = () => `
<form id="upload-form">
  <input 
    type="file"
    name="file"
    id="file-upload"
    class="upload-file"
    accept="image/gif,video/*"
  />
  <p>Drag your files here or click in this area.</p>
  <div id="file-upload-btn" class="upload-btn">UPLOAD</div>
  <div class="preview" id="preview">
    <img id="img">
  </div>
</form>
`;

/**
 * @author Delyana Yordanova
 * Provides the HTML template for a message after upload attempt
 * @return {string} returns the HTML template
 */
export const uploadMessage = () => `
  <div id="my-modal" class="modal">
    <div class="modal-content">
      <span class="close-upload-message">&times;</span>
      <p id="message"></p>
    </div>
  </div>
`;
