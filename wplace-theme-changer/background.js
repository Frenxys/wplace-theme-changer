// Available themes
const THEMES = [
  "acquerello",
  "aurora-boreale",
  "cute",
  "dark",
  "halloween",
  "liberty",
  "pixel-art-retro",
  "positron",
  "purple",
  "rainbow",
  "space"
];
let selectedTheme = "space";

// Listen for messages from the content script to change theme
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setTheme" && THEMES.includes(request.theme)) {
    selectedTheme = request.theme;
    sendResponse({success: true, theme: selectedTheme});
  } else if (request.action === "getTheme") {
    sendResponse({theme: selectedTheme});
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Redirecting request:", details.url, "Theme:", selectedTheme);
    return {redirectUrl: `https://wplacepixels.web.app/themes/${selectedTheme}.json`};
  },
  {urls: ["*://maps.wplace.live/styles/*", "*://wplace.live/styles/*"]},
  ["blocking"]
);
