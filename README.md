# wplace-theme-changer

This extension modifies the theme of the website by overriding CSS styles to customize the appearance according to user preferences.

## Features
- Overrides website styles using custom CSS
- Allows theme and appearance customization

## Main files
- `manifest.json`: Extension manifest
- `background.js`: Background script
- `content.js`: Style override script

## Installation (Firefox only)
1. Clone or download this repository.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click on "Load Temporary Add-on" and select the `manifest.json` file from the project folder.

## Usage
Once installed, the extension will automatically override the styles of the target website, changing the theme according to the settings defined in `content.js`.

## TODO
- [ ] Integrate a theme store hosted at [https://wplacepixels.web.app/](https://wplacepixels.web.app/) to allow users to browse and apply themes directly from the extension.
- [ ] Add a theme creator feature to let users design and save their own custom themes from the extension interface.

## Contributions
Contributions are appreciated! Feel free to open issues or submit pull requests to help improve the extension.

## Author
Enea
