function task81() {
  var elem = document.getElementById("parent1");
  elem.firstElementChild.style.cssText = "color: #ff3737e3; font-size: 30px;";
}

function task82() {
  var elem = document.getElementById("parent2");
  elem.lastElementChild.style.cssText = "color: #ff3737e3; font-size: 30px;";
}

function task83() {
  var elem = document.getElementById("parent3");
  let children = elem.children;
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML += "!";

  }
  // elem.lastElementChild.style.cssText = "color: #ff3737e3; font-size: 30px;";
}
