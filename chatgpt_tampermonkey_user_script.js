// ==UserScript==
// @name        ChatGPT: Parse q parameter to input
// @description Query ChatGPT from Alfred.
// @match       https://chat.openai.com/chat*
// @grant       none
// @version     1.01
// ==/UserScript==

const inputSelector = "textarea[data-id='root']"
const buttonSelector = "button[disabled]:not([class*='opacity-0'])";

// setInterval until inputSelector is on the page
const interval = setInterval(() => {
  const inputEl = document.querySelector(inputSelector);
  const sendButton = document.querySelector(buttonSelector);

  if (inputEl && sendButton) {
    clearInterval(interval);
    // Parse the "q" param from the query string
    const urlObj = new URL(window.location.href);
    const q = urlObj.searchParams.get("q");
    if (!q) return;

    // Set the input field to the value of the "q" param
    inputEl.value = q;

    // Find the send button and click it after a delay
    setTimeout(() => {
      sendButton.removeAttribute('disabled');
      sendButton.click();
    }, 500); // You can adjust the delay before clicking the button
  }
}, 500);
