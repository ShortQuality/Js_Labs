function task91() {
  var elem = document.getElementById("parent1");
  elem.previousElementSibling.innerHTML += '!';
}

function task92() {
  var elem = document.getElementById("parent2");
  elem.nextElementSibling.innerHTML += '!';
}

function task93() {
  var elem = document.getElementById("parent3");
  elem.nextElementSibling.nextElementSibling.innerHTML += '!';
}
