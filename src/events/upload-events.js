import { q } from '../common/constants.js';
import { uploadGif } from '../requests/request-service.js';
import { isValidFile, showMessage } from './helpers.js';

/**
 * @author Delyana Yordanova
 * Handles the attempt to upload and
 * calls a function to check the validity of the file before upload
 * and a function to handle the upload outcome
 * @return {void}
 */
export const handleUploadAttempt = async () => {
  const file = document.forms['upload-form']['file-upload'].files[0];

  if (!isValidFile(file)) return;

  const formData = new FormData(q('#upload-form'));
  const uploadOutcome = await uploadGif(formData);

  handleUploadOutcome(uploadOutcome);
};

/**
 * @author Delyana Yordanova
 * Handle the upload outcome and calls a function to show a message to the user
 * @param {boolean} boolean parameter indicating success of failure
 * @return {void}
 */
export const handleUploadOutcome = (boolean) => {
  let message = '';

  if (boolean) {
    message = `Your GIF was successfully uploaded!`;
  } else {
    message = `Unsuccessful upload!`;
  }

  showMessage(message);
  q('#file-upload').value = '';
};

/**
 * @author Delyana Yordanova
 * Previews the selected file before upload
 * @return {void}
 */
export const showPreview = () => {
  const file = document.forms['upload-form']['file-upload'].files[0];
  const src = URL.createObjectURL(file);
  q('#img').src = src;
  q('#preview').classList.add('visible');
};

/**
 * @author Delyana Yordanova
 * Hides the preview of the file selected for upload
 * @return {void}
 */
export const hidePreview = () => {
  q('#img').src = ' ';
  q('#preview').classList.remove('visible');
};
