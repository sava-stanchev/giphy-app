import { q } from '../common/constants.js';
import { uploadGif } from '../requests/request-service.js';
import { isValidFile, showMessage } from './helpers.js';


export const renderCurrentUpload = async () => {

  const file = document.forms['upload-form']['file-upload'].files[0];

  if (!isValidFile(file)) return; // check file-type, file-size,

  const formData = new FormData(q('#upload-form'));

  try {
    const response = await uploadGif(formData);
    console.log(response);
    storeUploadedGifId(response);
    handleUploadOutcome(true);
  } catch {
    // console.log(e)
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
    // renderUploaded();
  } else {
    showMessage('Unsuccessful upload!');
  }
};


