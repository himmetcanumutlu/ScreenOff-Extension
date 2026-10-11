chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: chrome.runtime.getURL('black.html'),
    state: 'fullscreen'
  });
});

// Himmet Can Umutlu
// https://github.com/himmetcanumutlu