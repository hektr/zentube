const DEFAULT_SETTINGS = {
  hideShorts: true,
  hideSidebar: true,
  hideComments: false
};

// Applies CSS classes to the body based on current settings
function applySettings(settings) {
  if (!document.body) return;
  
  const body = document.body;
  
  if (settings.hideShorts) {
    body.classList.add('zentube-hide-shorts');
  } else {
    body.classList.remove('zentube-hide-shorts');
  }

  if (settings.hideSidebar) {
    body.classList.add('zentube-hide-sidebar');
  } else {
    body.classList.remove('zentube-hide-sidebar');
  }

  if (settings.hideComments) {
    body.classList.add('zentube-hide-comments');
  } else {
    body.classList.remove('zentube-hide-comments');
  }
}

// 1. Initial Load: Wait for <body> to be created, then apply settings
function init() {
  if (document.body) {
    chrome.storage.local.get(DEFAULT_SETTINGS, applySettings);
  } else {
    const observer = new MutationObserver(() => {
      if (document.body) {
        observer.disconnect();
        chrome.storage.local.get(DEFAULT_SETTINGS, applySettings);
      }
    });
    observer.observe(document.documentElement, { childList: true });
  }
}

// 2. SPA Navigation: YouTube fires this custom event on every internal page change
window.addEventListener('yt-navigate-finish', () => {
  chrome.storage.local.get(DEFAULT_SETTINGS, applySettings);
});

// 3. Real-time updates: Listen for toggle changes in the popup
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local') {
    chrome.storage.local.get(DEFAULT_SETTINGS, applySettings);
  }
});

// Start the initialization process
init();
