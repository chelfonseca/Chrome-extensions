(function(){
    console.log("Bookmarklet starting");
    var elts = document.getElementsByTagName('p');
    for(let i = 0; i < elts.length; i++){
        elts[i].style['backgroundColor'] = '#0000ff';
    }
})();
