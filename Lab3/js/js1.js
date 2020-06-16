function task1_1() {
  var elem = document.getElementById("elem1");
  elem.setAttribute("class", "www");
}

function task1_2() {
  var elem = document.getElementById("elem1");
  elem.removeAttribute("class", "www");
  //elem.className = "elem";
}

function task1_3() {
  var elem = document.getElementById("elem1");
  if (elem.className != 0) {
    alert("Class name: " + elem.className);
  } else {
    alert("Class name is empty!");
  }
}

function task1_4() {
  var elem = document.getElementById("elem1");
  if (elem.className != "www") {
    elem.setAttribute("class", "www");
  } else if (elem.className != 0 && elem.className == "www") {
    elem.removeAttribute("class", "www");
  }
}

function task1_5() {
  var elem = document.getElementById("elem1");
  alert(elem.classList.length);
}

function task1_6() {
  var elem = document.getElementById("elem1");
  if (elem.className != 0) {
    for (let className of elem.classList) {
      alert(className);
    }
  } else {
    alert("Class name is empty!");
  }
}
