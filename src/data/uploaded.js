
const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addToUploadedGifs = (response) => {
  const uploadedGif = response.data.id;
  uploaded.push(uploadedGif);

  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

export const getUploaded = () => [...uploaded];
