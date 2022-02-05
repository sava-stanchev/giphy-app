import { EMPTY_HEART, FULL_HEART } from "../common/constants.js";
import { getFavorites } from "../data/favorites.js";

export const setActiveNav = (page) => {
  const nav = $("a.nav-link");

  Array.from(nav).forEach((element) =>
    $(element).attr("data-page") === page
      ? $(element).addClass("active")
      : $(element).removeClass("active")
  );
};

export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};

export const isValidFile = (file) => {
  if (!file) {
    showMessage("Please select a file to upload!");
    $("#file-upload").val("");
    return false;
  }

  if (file.size > 104857600) {
    showMessage("Please select a file up to 100MB!");
    $("#file-upload").val("");
    return false;
  }

  if (!(file.type === "image/gif") && !(file.type === "video/*")) {
    showMessage("Please choose a .gif or a video file!");
    $("#file-upload").val("");
    return false;
  }

  return true;
};

export const showMessage = (message) => {
  $("#message").html(message);
  $("#my-modal").addClass("modal-open");
};
