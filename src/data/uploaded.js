import { uploadGif } from "../requests/request-service.js";

let uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addToUploadedGifs = async () => {
    const uploadedGif = await uploadGif().data.id;
    uploaded.push(uploadedGif);

    localStorage.setItem('uploaded', JSON.stringify(uploaded));
}

export const getUploaded = () => [...uploaded];