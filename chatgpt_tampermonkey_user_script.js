// ==UserScript==
// @name        ChatGPT: Parse q parameter to input
// @description Query ChatGPT from Alfred.
// @match       https://chat.openai.com/chat*
// @grant       none
// @version     1.0
// ==/UserScript==

const inputSelector = "textarea[data-id='root']"

// setInterval until inputSelector is on the page
const interval = setInterval(() => {
  const inputEl = document.querySelector(inputSelector)
  if (inputEl) {
    clearInterval(interval)
    // Parse the "q" param from the query string
    const urlObj = new URL(window.location.href)
    const q = urlObj.searchParams.get("q")
    if (!q) return

    // Set the input field to the value of the "q" param
    inputEl.value = q

    // Submit the form
    // const form = inputEl.closest("form")
    // form.dispatchEvent(new Event("submit")) // eslint-disable-line no-undef
    const button = inputEl.nextElementSibling
    button.click()
  }
}, 500)
