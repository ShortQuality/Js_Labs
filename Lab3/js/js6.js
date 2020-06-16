function task61() {
  let parent = document.getElementById("parent");
  let elem = document.querySelector("#elem1");
  let li = document.createElement("li");
  li.innerHTML = "!!!";
  li.style.cssText = "color: #ff3737e3; font-size: 30px;"
  parent.insertBefore(li, elem);
}
