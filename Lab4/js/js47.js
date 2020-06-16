function js47Script() {
var rows_num = document.getElementById("rows_num");
var cols_num = document.getElementById("cols_num");
var div = document.querySelector('#elem');
var btn = document.querySelector("#button");
btn.addEventListener("click", toGenerate);

function toGenerate() {
  var tab = document.querySelector("table");
  if (tab != undefined) {
    tab.innerHTML = "";
  } else {
    tab = document.createElement("table");
    div.appendChild(tab);
  }

  for (var i = 0; i < rows_num.value; i++) {
    var row = document.createElement("tr");
    tab.appendChild(row);
  }

  var rowsAll = document.getElementsByTagName("tr");
  for (var i = 0; i < rowsAll.length; i++) {
    for (var k = 0; k < cols_num.value; k++) {
      var cell = document.createElement("td");
      cell.innerHTML = "*";
      rowsAll[i].appendChild(cell);
    }
  }
  
}
}