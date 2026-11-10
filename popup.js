const DEFAULT_SETTINGS = {
  hideShorts: true,
  hideSidebar: true,
  hideComments: false
};

// DOM Elements
const toggles = {
  hideShorts: document.getElementById('toggleShorts'),
  hideSidebar: document.getElementById('toggleSidebar'),
  hideComments: document.getElementById('toggleComments')
};

// Load current settings and update UI
chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
  toggles.hideShorts.checked = settings.hideShorts;
  toggles.hideSidebar.checked = settings.hideSidebar;
  toggles.hideComments.checked = settings.hideComments;
});

// Save settings on change
Object.keys(toggles).forEach(key => {
  toggles[key].addEventListener('change', (e) => {
    const newSettings = {
      [key]: e.target.checked
    };
    chrome.storage.local.set(newSettings);
  });
});
