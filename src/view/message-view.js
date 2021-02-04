/**
 * @author Delyana Yordanova
 * Provides the HTML template for a view with
 * a message to the user if an error occurs
 * @return {string} returns the HTML template
 */
export const toErrorMessageView = () => `
  <div class="content upload">
    <div class="content-inner">
      ${errorMessage()}    
    </div>
  </div>
`;

/**
 * @author Delyana Yordanova
 * Provides the HTML template for a message after an error occurs
 * @return {string} returns the HTML template
 */
export const errorMessage = () => `
  <div id="my-modal" class="modal">
    <div class="modal-content">
      <span class="close-error-message">&times;</span>
      <p id="message"></p>
    </div>
  </div>
`;
