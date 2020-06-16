function task54() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/^a.+?a$/g, '!');
}
