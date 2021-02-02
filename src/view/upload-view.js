export const toUploadView = () => `
<h1>Upload your GIFs and Stickers</h1>
<div class="content upload">
  <div class="content-inner">
    ${uploadForm}
    <div id="my-modal" class="modal">
      <div class="modal-content">
      <span class="close-modal">&times;</span>
      <p id="upload-message"></p>
      </div>
    </div>
  </div>
</div>
`;

export const uploadForm = `
<form id="upload-form">
  <input type="file" id="file-upload" name="file" accept="image/gif,video/*" />
  <p>Drag your files here or click in this area.</p>
  <button type="submit" id="file-upload-btn" class="upload-btn">UPLOAD</button>
</form>
`;
