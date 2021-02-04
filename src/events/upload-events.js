import { q } from '../common/constants.js';
import { uploadGif } from '../requests/request-service.js';
import { isValidFile, showMessage } from './helpers.js';

/**
 * Handles the attempt to upload and
 * calls a function to check the validity of the file before upload
 * and a function to handle the upload outcome
 *
 * @author Delyana Yordanova
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
 * Handle the upload outcome and calls a function to show a message to the user
 *
 * @author Delyana Yordanova
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
 * Previews the selected file before upload
 *
 * @author Delyana Yordanova
 * @return {void}
 */
export const showPreview = () => {
  const file = document.forms['upload-form']['file-upload'].files[0];
  const src = URL.createObjectURL(file);
  q('#img').src = src;
  q('#preview').classList.add('visible');
};

/**
 * Hides the preview of the file selected for upload
 *
 * @author Delyana Yordanova
 * @return {void}
 */
export const hidePreview = () => {
  q('#img').src = ' ';
  q('#preview').classList.remove('visible');
};
