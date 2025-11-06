
let selectedTheme = "space";

// Listen for messages from the content script to change theme
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setTheme" && typeof request.theme === "string" && request.theme.length > 0) {
    selectedTheme = request.theme;
    sendResponse({success: true, theme: selectedTheme});
  } else if (request.action === "getTheme") {
    sendResponse({theme: selectedTheme});
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Redirecting request:", details.url, "Theme:", selectedTheme);
    return {redirectUrl: `https://wplacepixels-default-rtdb.europe-west1.firebasedatabase.app/themes/${selectedTheme}.json`};
  },
  {urls: ["*://maps.wplace.live/styles/*", "*://wplace.live/styles/*"]},
  ["blocking"]
);
