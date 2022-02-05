import { uploadGif } from "../requests/request-service.js";
import { isValidFile, showMessage } from "./helpers.js";

export const handleUploadAttempt = async () => {
  const file = document.forms["upload-form"]["file-upload"].files[0];
  if (!isValidFile(file)) return;

  const formData = new FormData($("#upload-form")[0]);
  const uploadOutcome = await uploadGif(formData);
  handleUploadOutcome(uploadOutcome);
};

export const handleUploadOutcome = (boolean) => {
  let message = "";

  if (boolean) {
    message = `Your GIF was successfully uploaded!`;
  } else {
    message = `Unsuccessful upload!`;
  }

  showMessage(message);
  $("#file-upload").val("");
};

export const showPreview = () => {
  const file = document.forms["upload-form"]["file-upload"].files[0];
  const src = URL.createObjectURL(file);
  $("#img").attr("src", src);
  $("#preview").addClass("visible");
};

export const hidePreview = () => {
  $("#img").attr("src", " ");
  $("#preview").removeClass("visible");
};
