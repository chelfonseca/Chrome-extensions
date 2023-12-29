const idWord = document.getElementById("idWord");

// let bgpage = chrome.extension.getBackgroundPage();
// let word = bgpage.word;

chrome.runtime.onMessage.addListener(showReceived);



function showReceived(request, sender, sendResponse){
     idWord.innerHTML = String(request.text);

}

// See: https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers