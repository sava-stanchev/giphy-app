import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../data/favorites.js";
import { renderFavoriteStatus } from "./helpers.js";

export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
  } else {
    addFavorite(gifId);
  }

  $(`span[data-gif-id="${gifId}"]`).html(renderFavoriteStatus(gifId));
};
