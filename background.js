chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, tab => {
    const socialMediaWebsites = [
      "facebook.com",
      "twitter.com",
      "instagram.com",
      "linkedin.com",
      // Add more social media websites as needed
    ];
    for(let i = 0; i<socialMediaWebsites.length; i++){
      if(tab.url.includes(socialMediaWebsites[i])){
        chrome.windows.getCurrent(currentWindow => {
          chrome.windows.create({
            type: "popup",
            url: "popup.html",
            state: "maximized"
          });
        });
      }
    }
    
  });
});
