function task41() {
  var val = document.getElementById("parent");

  var li = document.createElement("li");
  li.innerHTML = "Пункт";
  li.style.cssText = "color: #ff3737e3; font-size: 30px;";
  val.appendChild(li);
}

function task42() {
  var arr = ["New 1", "New 2", "New 3"];
  for (var i = 0; i < arr.length; i++) {
    var val = document.getElementById("parent1");
    var li = document.createElement("li");
    li.innerHTML = arr[i];
    li.style.cssText = "color: #ff3737e3; font-size: 30px;";
    val.appendChild(li);
  }
}
