// content.js
(() => {
  const title = document.title;
  chrome.runtime.sendMessage({ action: 'setPageTitle', title });
})();

