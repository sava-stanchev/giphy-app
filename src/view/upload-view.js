export const toUploadView = () => `
<h1>Upload your GIFs and Stickers</h1>
<div class="content upload">
  <div class="content-inner">
    ${uploadForm}
  </div>
</div>
`;

export const uploadForm = `
<form id="upload-form">
  <input type="file" id="file-upload" name="fileUpload" />
  <p>Drag your files here or click in this area.</p>
  <button type="submit" id="file-upload-btn" class="upload-btn">UPLOAD</button>
</form>
`;
