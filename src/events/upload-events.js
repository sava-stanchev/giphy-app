// import { isValidFile } from './events/helpers.js';
import { q } from '../common/constants.js';
import { uploadGif } from '../requests/request-service.js';
import { renderUploaded } from './navigation-events.js';
import { showMessage } from './helpers.js';


export const renderCurrentUpload = async (file) => {

  // if (!isValidFile(file)) return; - check file-type, file-size,

  try {
    const response = await uploadGif(file);
    console.log(response);
    // storeUploadedGifId(response);
    handleUploadOutcome(true);
  } catch {
    handleUploadOutcome(false);
  }
};

export const storeUploadedGifId = (response) => {
  // TODO
};

export const handleUploadOutcome = (boolean) => {
  if (boolean) {
    showMessage('Your GIF was successfully uploaded!');
    q('#file-upload').value = '';
    renderUploaded();
  } else {
    showMessage('Unsuccessful upload!');
  }
};


