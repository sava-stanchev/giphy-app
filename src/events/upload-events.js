import { q } from '../common/constants.js';
import { addToUploadedGifs } from '../data/uploaded.js';
import { uploadGif } from '../requests/request-service.js';
import { isValidFile, showMessage } from './helpers.js';
// import { renderUploaded } from './navigation-events.js';


export const renderCurrentUpload = async () => {

  const file = document.forms['upload-form']['file-upload'].files[0];

  if (!isValidFile(file)) return; // check file-type, file-size,

  const formData = new FormData(q('#upload-form'));

  try {
    const response = await uploadGif(formData);
    console.log(response);
    addToUploadedGifs(response);
    handleUploadOutcome(true);
  } catch {
    // console.log(e)
    handleUploadOutcome(false);
  }
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


