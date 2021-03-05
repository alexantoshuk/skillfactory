// Задание 4.

// Сверстайте кнопку, по клику на которую будет отправляться запрос к Timezone API. В запросе нужно отправить координаты местоположения пользователя,
// полученные с помощью Geolocation API. В ответ на запрос придёт объект, из которого нужно вывести на экран следующую информацию:

//         временная зона, в которой находится пользователь: параметр timezone;
//         местные дата и время: параметр date_time_txt.

// Строка запроса к API выглядит следующим образом:

// https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=latitude&long=longitude.

// Вместо latitude и longitude нужно подставить широту и долготу.

// https://codepen.io/alexantoshuk/pen/YzpjOxN


const geolocation = document.querySelector("#geolocation");
const timezone = document.querySelector("#timezone");
const time = document.querySelector("#time");

const btn = document.querySelector(".j-btn-test");

// Функция, выводящая текст об ошибке
const error = () => {
    geolocation.textContent = "Информация о местоположении недоступна";
};

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    // console.log("position", position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    geolocation.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    timezone.textContent = "Получение данных по временной зоне…";

    fetch(
        `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            timezone.textContent = data.timezone;
            time.textContent = data.date_time_txt;
        })
        .catch((err) => {
            timezone.textContent = "Ошибка при получении данных по временной зоне.";
            time.textContent = "";
            console.log("Error response from TimeZone");
        });
};

btn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        geolocation.textContent = "Geolocation не поддерживается вашим браузером";
    } else {
        geolocation.textContent = "Определение местоположения…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
});
