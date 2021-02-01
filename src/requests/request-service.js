import { API_URL, API_KEY, q } from '../common/constants.js'

export const loadTrendingGIFs = async () => {
  const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=25&rating=g`);
  const jsonResult = await response.json();

  return jsonResult;
};

export const loadSingleGIF = async (gifId) => {

  const response = await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`);
  const jsonResult = response.json();
  
  return jsonResult;
};

export const loadSearchGifs = async (searchTerm = '') => {
  const res = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=20`);

  return res.json();
};

export const uploadGif = async () => {
  const formData = new FormData(q('#upload-form'));
  const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
      {
        method: 'POST',
        body: formData,
      });
  const jsonResult = await response.json();
  console.log(jsonResult);

  return jsonResult;
};
