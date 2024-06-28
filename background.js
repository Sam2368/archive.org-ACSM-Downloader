// background.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'downloadContent') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let url = new URL(tabs[0].url);
      let pathParts = url.pathname.split('/');
      
      // Ensure identifier extraction handles different URL formats
      let identifier = pathParts.find(part => part && part.startsWith('engineeringdrawi'));

      if (identifier) {
        // Execute content script to get the page title
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content.js']
        }, () => {
          // Listen for the message from the content script
          chrome.runtime.onMessage.addListener(function(msg) {
            if (msg.action === 'setPageTitle') {
              const title = msg.title.replace(/[\/:*?"<>|]/g, ''); // Sanitize filename
              let downloadUrl = `https://archive.org/services/loans/loan/?action=media_url&identifier=${identifier}&format=pdf&redirect=1`;

              chrome.downloads.download({
                url: downloadUrl,
                filename: `${title}.acsm`
              }, (downloadId) => {
                if (chrome.runtime.lastError) {
                  sendResponse({ success: false });
                  chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icons/icon48.png',
                    title: 'Download Failed',
                    message: 'Failed to initiate download.'
                  });
                } else {
                  sendResponse({ success: true });
                  chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icons/icon48.png',
                    title: 'Download Started',
                    message: 'Your ACSM download has been initiated.'
                  });
                }
              });
            }
          });
        });
      } else {
        console.error('Failed to extract ID from the current page.');
        sendResponse({ success: false });
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon48.png',
          title: 'Download Failed',
          message: 'Failed to extract ID from the current page.'
        });
      }
    });
    return true; // Keep the message channel open for the sendResponse callback
  }
});

