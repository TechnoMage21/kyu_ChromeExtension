// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener(details => {
    // Check if the target URL is Facebook or Instagram
    if (details.url.includes("facebook.com") || details.url.includes("instagram.com") || details.url.includes("linkedin.com")) {
      // Create the popup window
      chrome.windows.create({
        type: "popup",
        url: "popup.html",
        width: 1920,
        height: 1080
      });
    }
  });
  