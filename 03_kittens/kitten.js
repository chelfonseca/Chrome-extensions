console.log("kitten united!");

let filenames = [
    "eduardo-mallmann-3LPGWASiSbM-unsplash.jpg",
    "hannah-troupe-0FQneB1VjaM-unsplash.jpg",
    "janan-lagerwall-Od4VSPaG1-4-unsplash.jpg",
    "janan-lagerwall-Od4VSPaG1-4-unsplash.jpg",
    "raquel-pedrotti-AHgpNYkX9dc-unsplash.jpg"
];

let imgs = document.getElementsByTagName('img');

for(imgElt of imgs){
    let r = Math.floor(Math.random()*filenames.length);
    let file = `kittensImages/${filenames[r]}`;
    let url = chrome.runtime.getURL(file);
    imgElt.src = url;
    console.log(imgElt.src);
} 