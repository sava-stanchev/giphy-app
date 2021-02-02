import { q } from '../common/constants.js';
import { uploadGif } from '../requests/request-service.js';
import { isValidFile, showMessage } from './helpers.js';


export const renderCurrentUpload = async () => {
  const file = document.forms['upload-form']['file-upload'].files[0];

  if (!isValidFile(file)) return; // check file-type, file-size,

  const formData = new FormData(q('#upload-form'));
  const uploadOutcome = await uploadGif(formData);

  handleUploadOutcome(uploadOutcome);
};

export const handleUploadOutcome = (boolean) => {
  let message = '';

  if (boolean) {
    message = 'Your GIF was successfully uploaded!';
  } else {
    message = 'Unsuccessful upload!';
  }

  showMessage(message);
  q('#file-upload').value = '';
};


