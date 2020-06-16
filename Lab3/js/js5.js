function task51() {
  let arr = [1, 2, 3, 4];
  var elem = document.getElementById("parent");
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    li.style.cssText = "color: #ff3737e3; font-size: 30px;"
    elem.appendChild(li);
    li.addEventListener("click", function () {
      alert(li.innerHTML);
    });
  }
}
