import { q } from '../common/constants.js';
import { uploadGif } from '../requests/request-service.js';
import { isValidFile, showMessage } from './helpers.js';


export const renderCurrentUpload = async () => {
  const file = document.forms['upload-form']['file-upload'].files[0];

  if (!isValidFile(file)) return;

  const formData = new FormData(q('#upload-form'));
  const uploadOutcome = await uploadGif(formData);

  handleUploadOutcome(uploadOutcome);
};

export const showPreview = () => {
  const file = document.forms['upload-form']['file-upload'].files[0];
  const src = URL.createObjectURL(file);
  q('#img').src = src;
  q('#preview').classList.add('visible');
};
export const hidePreview = () => {
  q('#img').src = ' ';
  q('#preview').classList.remove('visible');
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

// export const showPreview = (e) => {
//   const preview = q('#preview');
//   const src = URL.createObjectURL(e.target.files[0]);
//   preview.src = src;
//   preview.classList.add('visible');
// };


