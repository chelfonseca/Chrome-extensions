console.log("Content running?");

window.addEventListener('mouseup', showWordSelected);

function showWordSelected() {
    console.log("showWordSelected running");
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);

    if(selectedText.length > 0) {
        let message = {
            text: selectedText
        };
        chrome.runtime.sendMessage(message);
    }

}