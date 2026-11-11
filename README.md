# ZenTube

<div align="center">

A simple, private, and efficient browser extension for Google Chrome and Chromium-based browsers. Remove distractions like Shorts, sidebars, and comments to maintain control over your attention and break the infinite scrolling cycle.

<br>

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue?logo=googlechrome)](https://developer.chrome.com/docs/extensions/develop)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](docs/LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Install-blue?logo=googlechrome)](https://chromewebstore.google.com/)
[![Privacy](https://img.shields.io/badge/Privacy-First-brightgreen)](docs/POLICY)

</div>

---
## Screenshots

<div align="center">
  <img src="zentube.png" alt="Zentube" width="480"/>
</div>

---

## Features

- **Hide Shorts**: Removes Shorts shelves from the homepage and search results.
- **Hide Sidebar**: Removes the recommended videos column during playback, automatically expanding the main video player to full width.
- **Hide Comments**: Optionally hides the comments section to prevent endless scrolling and distraction.
- **Real-time Toggling**: Changes apply instantly without requiring a page reload.
- **100% Local & Private**: Your settings are saved exclusively in `chrome.storage.local`. No data is ever sent to external servers.

---

## Privacy & Permissions

Zentube is built with a "Privacy-First" philosophy. It requests only the absolute minimum permissions required to function:

- **`storage`**: To save and load your UI preferences locally on your device.
- **`content_scripts`**: To apply user-defined CSS hiding rules natively within the browser on youtube.com. **We do not read, track, or store your browsing history, URLs, or tab content.**

Read the full, detailed policy here: **[POLICY](docs/POLICY)**

---

## License

This project is open-source and licensed under the **[MIT License](docs/LICENSE)**.

---

## Support the Project

If you find Zentube useful, consider supporting its development! Your contribution helps keep the project alive and ad-free.

<div align="center">

[![Support on Boosty](https://img.shields.io/badge/Support%20on-Boosty-orange?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMC44NCA0LjYxYTUuNSA1LjUgMCAwIDAtNy43OCAwTDEyIDUuNjdsLTEuMDYtMS4wNmE1LjUgNS41IDAgMCAwLTcuNzggNy43OGwxLjA2IDEuMDZMMTIgMjEuMjNsNy43OC03Ljc4IDEuMDYtMS4wNmE1LjUgNS41IDAgMCAwIDAtNy43OHoiPjwvcGF0aD48L3N2Zz4=)](https://boosty.to/hektr992)

</div>
