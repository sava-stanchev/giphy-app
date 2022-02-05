import {
  HOME,
  TRENDING,
  FAVORITES,
  CONTAINER_SELECTOR,
  UPLOAD,
  UPLOADED,
  ABOUT,
} from "../common/constants.js";

import {
  loadFavoriteOrRandomGifs,
  loadSingleGif,
  loadTrendingGifs,
  loadUploadedGifs,
} from "../requests/request-service.js";

import { toFavoritesView, toRandomView } from "../view/favorites-view.js";
import { toSingleGifView } from "../view/giphies-view.js";
import { toHomeView } from "../view/home-view.js";
import { toTrendingView } from "../view/trending-view.js";
import { toUploadView } from "../view/upload-view.js";
import { setActiveNav, showMessage } from "./helpers.js";
import { toUploadedGifsView } from "../view/uploaded-view.js";
import { toAboutView } from "../view/about-view.js";
import { toErrorMessageView } from "../view/message-view.js";

export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    default:
      return null;
  }
};

const renderHome = () => {
  $(CONTAINER_SELECTOR).html(toHomeView());
};

const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();

  if (trendingGifs) {
    $(CONTAINER_SELECTOR).html(toTrendingView(trendingGifs.data));
  } else {
    $(CONTAINER_SELECTOR).html(toErrorMessageView());
    showMessage("Something went wrong!");
  }
};

export const renderGIFDetails = async (gifId = null) => {
  const { data } = await loadSingleGif(gifId);
  if (data) {
    $(CONTAINER_SELECTOR).html(toSingleGifView(data));
  } else {
    $(CONTAINER_SELECTOR).html(toErrorMessageView());
    showMessage("Something went wrong!");
  }
};

const renderUpload = () => {
  $(CONTAINER_SELECTOR).html(toUploadView());
};

export const renderUploaded = async () => {
  const { data } = await loadUploadedGifs();
  if (data) {
    $(CONTAINER_SELECTOR).html(toUploadedGifsView(data));
  } else {
    $(CONTAINER_SELECTOR).html(toErrorMessageView());
    showMessage("Something went wrong!");
  }
};

const renderFavorites = async () => {
  const favoriteGifs = await loadFavoriteOrRandomGifs();
  if (favoriteGifs) {
    const { data } = favoriteGifs;
    if (Array.isArray(data)) {
      $(CONTAINER_SELECTOR).html(toFavoritesView(data));
    } else {
      $(CONTAINER_SELECTOR).html(toRandomView(data));
    }
  } else {
    $(CONTAINER_SELECTOR).html(toErrorMessageView());
    showMessage("Something went wrong!");
  }
};

const renderAbout = () => {
  $(CONTAINER_SELECTOR).html(toAboutView());
};
