function js46Script() {
    var elems = document.querySelectorAll('td');
    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function () {
            this.classList.add('active');
            this.style.cssText = "color: red; text-shadow: 0 0px 10px red;";
        });
    }

    document.querySelector('#go').addEventListener('click', function () {
        var elems = document.querySelectorAll('.active');
        var sum = 0;
        for (var i = 0; i < elems.length; i++) {
            sum += Number(elems[i].innerHTML);
        } var p = document.getElementById('sumResult');
        p.innerHTML = "Сумма активных ячеек: " + sum;
        p.style.cssText = "color: white; text-shadow: 0px 0px 10px rgb(255, 255, 255);"
        document.body.appendChild(p);
    });

    document.querySelector('#clear').addEventListener('click', function () {
        var elems = document.querySelectorAll('td');
        var p = document.getElementById('sumResult');
        p.innerHTML = "Сумма активных ячеек: " + 0;
        p.style.cssText = "color: white; text-shadow: 0px 0px 10px rgb(255, 255, 255);"
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList = [];
            elems[i].style.cssText = "this{color: white; text-shadow: 0px 0px 10px rgb(255, 255, 255);} td:hover {color: rgb(126, 126, 126); cursor: default;}"
        }
    });
} 