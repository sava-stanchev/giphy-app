import { CONTAINER_SELECTOR } from "../common/constants.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { toErrorMessageView } from "../view/message-view.js";
import { toSearchView } from "../view/search-view.js";
import { showMessage } from "./helpers.js";

export const renderSearchItems = async (searchTerm) => {
  const gifs = await loadSearchGifs(searchTerm);
  if (gifs) {
    $(CONTAINER_SELECTOR).html(toSearchView(gifs, searchTerm));
  } else {
    $(CONTAINER_SELECTOR).html(toErrorMessageView());
    showMessage("Something went wrong!");
  }
};
