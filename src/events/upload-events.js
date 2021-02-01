// import { isValidFile } from './events/helpers.js';
import { q } from "../common/constants.js";
import { uploadGif } from "../requests/request-service.js";


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
    showUploadMessage(true);
    q('#file-upload').value = '';
    //load uploaded GIFs
  } else {
    showUploadMessage(false);
  }
};

export const showUploadMessage = (boolean) => {
  if (boolean) {
    q('#upload-message').innerHTML = 'Your GIF was successfully uploaded!';
  } else {
    q('#upload-message').innerHTML = 'Unsuccessful upload!';
  }
  q('#my-modal').classList.add('modal-open');
};
