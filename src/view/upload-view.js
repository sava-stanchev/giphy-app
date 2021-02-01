export const toUploadView = () => `
<h1>Upload your GIFs and Stickers</h1>
<div class="content">
  <div class="content-inner">
    ${uploadForm}
  </div>
</div>
`;

export const uploadForm = () => `
<!-- Upload  -->
<form id="upload-form">
  <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
    <label for="file-upload" id="file-drag">
      <img id="file-image" src="#" alt="Preview" class="hidden">
      <div id="start">
        <i class="fa fa-download" aria-hidden="true"></i>
        <div>Select a file or drag here</div>
        <!-- message if not superted format -->
        <div id="notimage" class="hidden">Please select an image</div>
        <span id="file-upload-btn" class="upload-btn">Select a file</span>
      </div>
      <div id="response" class="hidden">
        <div id="messages"></div>
          <!-- Load Progress Bar 
        <progress class="progress" id="file-progress" value="0">
          <span>0</span>%
        </progress>  -->
      </div>
    </label>
</form>
`;