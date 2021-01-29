const favoriteGifs = JSON.parse(localStorage.getItem('favorites') || []);

export const addToFavoritesGifs = (gifId) => {

    if (favoriteGifs.find(id => id === gifId)) {

        return;
    }

    favoriteGifs.push(gifId);
    localStorage.setItem('favorites', JSON.stringify(favoriteGifs));
}

export const removeFromFavoriteGifs = (gifId) => {
    favoriteGifs = favoriteGifs.filter(id => id !== gifId);
    localStorage.setItem('favorites', JSON.stringify(favoriteGifs));

}

export const getFavoriteGifs = () => [...favoriteGifs];