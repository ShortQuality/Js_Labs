function task57() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/a[a-g]a/g, '!');
}
function task58() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/a[a-z0-9]+a/g, '!');
}
function task59() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/aaa$/g, '!');
}
function task510() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/ae{2}a|ax+a/g, '!');
}
function task511() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/(\\){3}/g, '!');
}
function task512() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/(\d)/g, '$1$1');
}
function task513() {
    var elem = document.getElementById('text');
    alert( /^http:\/[a-z.-_]+\.[a-z]{2,3}$/.test(elem.innerHTML) ); 
}
function task514() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/\/\*.*?\*\//g, "");
}
function task515() {
    var elem = document.getElementById('text');
    elem.innerHTML = elem.innerHTML.replace(/aaa(?!b)/, '!');
}
function task516() {
    var elem = document.getElementById('text');
    var arr = elem.innerHTML.replace(/(\d+)\s\+\s(\d+)\s=/g, function (match, match1, match2) {
        var res = parseInt(match1) + parseInt(match2);
        return match + res;
    });
    
    elem.innerHTML = arr;
}
function task517() {
  var elem = document.getElementById("text");
  elem.innerHTML = elem.innerHTML.replace(/\W*\w*(\w)\1\w*\W*/g, " ");
}