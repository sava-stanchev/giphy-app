const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF ID that is stored in an array on localStorage
 *
 * @author Dimitar Stanoev
 * @param {object} response - an object that contains data about the gif
 * @return {void}
 */
export const addToUploadedGifs = (response) => {
  const uploadedGif = response.data.id;
  uploaded.push(uploadedGif);

  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Gets uploaded gifs by ID
 *
 * @author Dimitar Stanoev
 * @return {array} array that contains the IDs of uploaded GIFs
 */
export const getUploaded = () => [...uploaded];
