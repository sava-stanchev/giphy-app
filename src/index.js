import { renderSearchItems } from "./events/search-events.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { loadPage, renderGIFDetails } from "./events/navigation-events.js";
import { HOME } from "./common/constants.js";
import {
  handleUploadAttempt,
  showPreview,
  hidePreview,
} from "./events/upload-events.js";

$(() => {
  $(document).click((e) => {
    if (
      $(e.target).hasClass("nav-link") ||
      $(e.target).hasClass("navbar-brand")
    ) {
      loadPage($(e.target).attr("data-page"));
    }

    if ($(e.target).hasClass("giphy-image")) {
      renderGIFDetails($(e.target).attr("data-gif-id"));
    }

    if ($(e.target).hasClass("favorite")) {
      toggleFavoriteStatus($(e.target).attr("data-gif-id"));
    }

    if ($(e.target).hasClass("upload-btn")) {
      handleUploadAttempt();
    }

    if ($("modal-open")) {
      if ($(e.target).hasClass("close-upload-message")) {
        $("#my-modal").removeClass("modal-open");
        hidePreview();
      }
      if ($(e.target).hasClass("close-error-message")) {
        $("#my-modal").removeClass("modal-open");
        loadPage(HOME);
      }
    }

    if ($("#file-upload")) {
      if ($(e.target).hasClass("upload-file")) {
        $("#file-upload").off("input", showPreview);
        $("#file-upload").on("input", showPreview);
      }
    }
  });

  $("#btnSearch").click((e) => {
    e.preventDefault();
    const input = $("#search")[0].value;
    renderSearchItems(input);
    $("#search")[0].value = "";
  });

  loadPage(HOME);
});
