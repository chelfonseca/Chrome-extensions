console.log("Background running?")

chrome.runtime.onMessage.addListener(showReceived);

navigator.word;

function showReceived(request, sender, sendResponse){
    console.log(request);
    navigator.word = request.text;

}