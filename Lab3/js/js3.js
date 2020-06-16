function task3_1() {
  var elem = document.getElementById("elem1");
  alert(elem.tagName);
}

function task3_2() {
  var elem = document.getElementById("elem1");
  alert(elem.tagName.toLowerCase());
}

function task3_3() {
  var elem = document.getElementsByClassName("www");
  for (var i = 0; i < elem.length; i++) {
    elem[i].innerHTML = elem[i].innerHTML + " " + elem[i].tagName.toLowerCase();
  }
}
