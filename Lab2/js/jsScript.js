function task11() {
  alert("Текущий день:\n" + new Date().getDate());
}

function task12() {
  var date = new Date();
  var month = date.getMonth();
  var months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сенятбрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  alert("Текущий месяц:\n" + months[month]);
}

function task13() {
  alert("Текущий год:\n" + new Date().getFullYear());
}

function task14() {
  var date = new Date();
  function getZero(param) {
    if (param < 10) {
      return "0" + param;
    } else {
      return param;
    }
  }
  alert(
    "Текущее время и текущая дата:\n" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      " " +
      getZero(date.getDate()) +
      "." +
      getZero(date.getMonth()) +
      "." +
      date.getFullYear()
  );
}

function task21() {
  alert("Номер текущего дня недели:\n" + new Date().getDay());
}

function task22() {
  var date = new Date();
  function showDay(day) {
    var days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    return days[day];
  }
  alert("Текущий день недели:\n" + showDay(date.getDay()));
}

function task23() {
  var date = new Date(2015, 0, 7);
  var day = date.getDay();

  function showDay(day) {
    var days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    return days[day];
  }

  alert("7-го января 2015 года была " + showDay(day) + ".");
}

function task31() {
  var date = new Date();
  alert(
    "С 1-го января 1970 года до настоящего момента времени прошло " +
      Math.floor(date.getTime() * 0.001 * 60) +
      " минут."
  );
}

function task41() {
  var one = Date.parse("1988-03-01T12:00:00");
  var now = new Date().getTime();
  alert(
    "С 1 марта 1988 года и до текущего момента прошло " +
      Math.floor((now - one) * 0.001 * 60 * 60) +
      " часов."
  );
}

function task51() {
  var date = new Date();
  var start = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    00,
    00,
    00
  );
  alert(
    "С начала дня до данного момента прошло " +
      (date.getTime() - start.getTime()) * 0.001 +
      " секунд."
  );
}

function task61() {
  var date = new Date();
  var finishDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59
  );
  alert(
    "До конца дня осталось " +
      (finishDay.getTime() - date.getTime()) * 0.001 +
      " секунд."
  );
}

function task62() {
  var nowDate = new Date();
  var param = document.getElementsByTagName("input")[0];
  var outp = document.getElementById("MYresult");
  if (param.value != 0) {
    var arr = param.value.split("-");
    if (arr[1] >= nowDate.getMonth() + 1) {
      var result = Date.parse(
        String(nowDate.getFullYear()) +
          "-" +
          String(arr[1]) +
          "-" +
          String(arr[2]) +
          "T00:00:00"
      );
    } else {
      //ДР будет только в след.году
      result = Date.parse(
        String(nowDate.getFullYear() + 1) +
          "-" +
          String(arr[1]) +
          "-" +
          String(arr[2]) +
          "T00:00:00"
      );
    }
    var temp = parseInt(
      Math.floor(((result - nowDate.getTime()) * 0.001) / 86400)
    );
    outp.innerHTML = temp;
  }
}

function task71() {
  window.setInterval(timer, 1000);
  function timer() {
    var time = document.getElementsByClassName("MYresult2")[0];
    time.innerHTML = parseInt(time.innerHTML) + 1;
  }
}

function task72_start() {
  window.timerId = window.setInterval(timer2, 1000);
  document.getElementsByClassName("button2")[0].disabled = true;
  document.getElementsByClassName("button2")[1].disabled = false;
}

function task72_stop() {
  window.clearInterval(window.timerId);
  document.getElementsByClassName("button2")[0].disabled = false;
  document.getElementsByClassName("button2")[1].disabled = true;
}

function timer2() {
  var time = document.getElementsByClassName("MYresult3")[0];
  time.innerHTML = parseInt(time.innerHTML) + 1;
}

function task73() {
  window.setInterval(timer, 1000);
}
function timer() {
  var elem = document.getElementsByClassName("MYresult4")[0];
  var nowDate = new Date();
  elem.innerHTML =
    addZero(nowDate.getHours()) +
    ":" +
    addZero(nowDate.getMinutes()) +
    ":" +
    addZero(nowDate.getSeconds());
}
function addZero(param) {
  if (param < 10) {
    return "0" + param;
  } else {
    return param;
  }
}

function task74() {
  window.timerId = window.setInterval(timer3, 400);
}
function stopTimer() {
  window.clearInterval(window.timerId);
}
function timer3() {
  var reverse = document.getElementsByClassName("MYresult5")[0];
  reverse.innerHTML = parseInt(reverse.innerHTML) - 1;
  document.getElementsByClassName("button2")[2].disabled = true;
  if (reverse.innerHTML > 0) {
    return reverse.innerHTML;
  } else {
    stopTimer();
    // return (document.getElementsByClassName(
    //   "container_countdown"
    // )[0].style.display = "block");
  }
}

function task75() {
    window.timerId = window.setInterval(countdownToMidnight, 1000);
}
function countdownToMidnight() {
    var nowDate = new Date();
    var midnight = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 23, 59, 59);
    document.querySelectorAll('.hours')[0].innerHTML = midnight.getHours() - nowDate.getHours();
    document.querySelectorAll('.minutes')[0].innerHTML = addZero(midnight.getMinutes() - nowDate.getMinutes());
    document.querySelectorAll('.seconds')[0].innerHTML = addZero(midnight.getSeconds() - nowDate.getSeconds());
    }
    
    //добавляем вызов функции отсчета через интервал 1с
    // setInterval(countdownToMidnight, 1000);
    
    //добавляем нуль перед значениями, длиной в одну цифру
    function addZero(param) {
    if (param < 10) {
    return '0' + param;
    } else {
    return param;
    }
    }
