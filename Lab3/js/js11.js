function task111() {
  var parent = document.getElementById("parent1");
  var child = document.getElementById("child");
  parent.removeChild(child);
}

function task112() {
  var parent = document.getElementById("parent2");
  var elemList = parent.children;
  parent.removeChild(elemList[elemList.length - 1]);
}

function task113() {
  var parent = document.getElementById("parent3");
  var child = document.getElementById("child3");
  parent.removeChild(child);
}

function task114() {
  var parent = document.getElementById("parent4");
}

function task115() {
  let text = document.querySelector("#text");
  // let submit = document.querySelector("#submit");
  // submit.addEventListener("click", function () {
  //   let clone = text.cloneNode(true);
  //   text.parentElement.appendChild(clone);
  // });
  let clone = text.cloneNode(true);
  text.parentElement.appendChild(clone);
}
