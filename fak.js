// Установите дату окончания
var countdownDate = new Date("nov 27, 2025 00:00:00").getTime();

// Обновление отсчета каждую секунду
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    // Вычислить дни, часы, минуты и секунды
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Выведите результат в элемент с id="countdown"
    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Если отсчет закончился
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Время исчерпано!";
    }
}, 1000);