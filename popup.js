document.getElementById('downloadButton').addEventListener('click', async () => {
  const downloadButton = document.getElementById('downloadButton');
  const statusDiv = document.getElementById('status');
  
  // Disable the button to prevent multiple clicks
  downloadButton.disabled = true;
  statusDiv.textContent = 'Downloading...';

  // Send message to background script to initiate download
  chrome.runtime.sendMessage({ action: 'downloadContent' }, (response) => {
    if (response && response.success) {
      statusDiv.textContent = 'Download initiated successfully.';
    } else {
      statusDiv.textContent = 'Failed to initiate download.';
    }

    // Re-enable the button after download attempt
    downloadButton.disabled = false;
  });
});

