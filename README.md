# Archive.org ACSM Downloader

This Chrome extension allows you to download ACSM files from Archive.org and renames them based on the page title.

## Features

- Extracts the identifier from the URL
- Downloads the ACSM file
- Gives notification on Download status
- Renames the file based on the page title

## Installation

### From GitHub Releases

1. **Download the Latest Release:**
   - Go to the [Releases page](https://github.com/Sam2368/Archive.org-ACSM-Downloader/releases).
   - Download the latest release archive (`.zip` or `.crx`).

2. **Load the Extension in Chrome:**
   - Extract the downloaded archive to a folder on your computer.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle switch in the top right.
   - Drag and drop the .crx file into the extension page.
     
### From Source
   - Clone this repository as a zip file and download it.
   - Extract the downloaded archive to a folder on your computer.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle switch in the top right.
   - Click "Load unpacked" and select the extracted folder

## Usage
1. **Navigate to Archive.org:**
    - Go to the page of the book you want to borrow from Archive.org.
    - Log-in and borrow the book for 1-hour
    - Then proceed to use the extension
2. **Use the Extension:**
    - Click the extension icon in the Chrome toolbar.
    - Click the "Download ACSM" button in the popup.
    - The ACSM file will be downloaded with a custom filename based on the page title.

**Note:** This only works on books that do not have a download option and need to be borrowed before reading. The output file of the ACSM file is in pdf format.

# Contributing
Contributions are welcome! If you have any suggestions for improvements or find any bugs, please submit an issue or a pull request on GitHub.

# License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
