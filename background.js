chrome.extension.onConnect.addListener(function(port) {

  console.assert(port.name == "count");
  port.onMessage.addListener(function(msg) {
    if (msg.replaceCount > 0) {
		chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
		chrome.browserAction.setBadgeText({text: msg.replaceCount+"+"});
	}else{
		chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 255] });
		chrome.browserAction.setBadgeText({text: "0"});
	}
  });

});