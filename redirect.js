// document.location.href = "https://youtube.com";

chrome.tabs.getCurrent(function (tab) {
    chrome.tabs.update(tab.id, {
       "url": "https://focal.pt",
       "highlighted": true
    });
});