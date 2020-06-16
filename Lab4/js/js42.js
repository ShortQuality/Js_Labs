function start() {
    var elem = document.getElementsByTagName('a');
        
    for (var i = 0; i < elem.length; i++) {
        elem[i].innerHTML = elem[i].innerHTML + '(' + elem[i].href + ')';
    }
}    