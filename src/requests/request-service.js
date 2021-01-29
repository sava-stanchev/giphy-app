export const loadTrendingGIFs = () => {
  return fetch('https://api.giphy.com/v1/gifs/trending?api_key=API_KEY&limit=25&rating=g')
    .then(res => res.json());
};