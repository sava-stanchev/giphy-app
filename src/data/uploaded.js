const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * @author Dimitar Stanoev
 * Adds a GIF ID that is stored in an array on localStorage
 * @param {object} response - an object that contains data about the gif
 * @return {void}
 */
export const addToUploadedGifs = (response) => {
  const uploadedGif = response.data.id;
  uploaded.push(uploadedGif);

  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * @author Dimitar Stanoev
 * Gets uploaded gifs by ID
 * @return {array} array that contains the IDs of uploaded GIFs
 */
export const getUploaded = () => [...uploaded];
