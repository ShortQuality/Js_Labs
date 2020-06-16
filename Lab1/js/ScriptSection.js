function task1()
{
    var a = prompt("a = ");
    var b = prompt("b = ");
    var z = a * 2;
    (z == b )? alert("Значения равны.") : alert("Значения не равны.");
}

function task2()
{
    var color = prompt("Цвет(Синий, Зеленый, Красный)");
    var form = prompt("Форма(Круглая, Квадратная)");
    var size = prompt("Размер(Большой, Маленький)");
    if((color == "Синий" || color == "синий") && (form == "Круглая" || form == "круглая") && (size == "Большой" ||size == "большой"))
    {
        alert("Что-то синее и большое.");
    }
    else if((color != "Синий" || color != "синий") && (form == "Квадратная" || form == "квадратная"))
    {
        alert("Наверное вы подумали про яблоко, но почему квадратное?»");
    }
    else
    {
        alert((color) + ' ' + (form) + ' ' + (size));
    }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function splitString(str)
  {
    for (var newStr = [], j = 0; j < str.length; j++) 
    {
        if((j+1)%2 == 1)
        {
            newStr[j] = str [j].toUpperCase()
        }
        else{
            newStr[j] = str[j]
        }

    }
     return newStr.join ('');
  }

function task3()
{
    var rand = getRandomIntInclusive(1, 45);
    var str = prompt("Введите строку с количеством символов не менее " + rand);
    if(str.length >= rand)
    {

        alert(splitString(str));
        
    }
    else
    {
        alert("Некорректная длина строки");
    }

}

function task4()
{
    var digit;
    var str;
    do
    {
        digit = prompt("Введите число больше 100");
        str = prompt("Введите текст");

    }while(digit < 100 || digit == null || str == null)

    var newStr = [];
    newStr = str.split(' ');
    if(newStr.length > 1)
    {
        alert(newStr[1]);
    }
    else{
        alert("Текст состоит из одного слова");
        
    }
}

function task5()
{
    var finalStr = '';
    var temp = 0;
    for(let i = 0; i <= 100; i++)
    {
        if(i >=2 && i % 13 == 3 && i % 7 == 3)
        {
                if(temp != 1)
                finalStr += i;
                else
                finalStr += ', ' + i;
                temp++;
        }
    }
    alert(finalStr);

}

function task6()
{
    var mushr = prompt("Введите цвет гриба(белый, желтый, красный, коричневый)");
    var skirt = prompt("Введите наличие юбки(есть, нет)");
    var tempStr = mushr + ' ' + skirt;
    switch(tempStr)
    {
        case "белый нет":
            
            alert("Вы нашли белый гриб");
            break;
        case "красный есть":
            
            alert("А не мухомор ли это?");
            break;
       
        default:
            alert("С грибами надо быть внимательными");     
            break;
    }
}