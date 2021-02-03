/**
 * @author Delyana Yordanova
 * Provides the HTML template for displaying view with
 * a message to the user if an error occurs
 * @return {string} returns the HTML template
 *                  in which the message view is rendered
 */
export const toErrorMessageView = () => `
<h1>Upload your GIFs and Stickers</h1>
<div class="content upload">
  <div class="content-inner">
    ${errorMessage}    
  </div>
</div>
`;

/**
 * @author Delyana Yordanova
 * Holds the HTML template for a message after an error occurs
 */
export const errorMessage = `
  <div id="my-modal" class="modal">
    <div class="modal-content">
      <span class="close-error-message">&times;</span>
      <p id="message"></p>
    </div>
  </div>
`;
