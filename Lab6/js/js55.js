function task55() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/ab{2,4}a/g, '!');
}
