// Задание 3.

// Сверстайте кнопку, клик на которую будет выводить на экран следующие данные:
// Размеры экрана пользователя (ширина и высота).
// Координаты местонахождения пользователя. Если пользователь отказался дать доступ к местоположению или данная функция недоступна в бразуере,
// вывести вместо координат сообщение «Информация о местоположении недоступна».

// https://codepen.io/alexantoshuk/pen/bGBjjdE


const screensize = document.querySelector("#screensize");
const geolocation = document.querySelector("#geolocation");
const btn = document.querySelector(".j-btn-test");

// Функция, выводящая текст об ошибке
const error = () => {
    geolocation.textContent = "Информация о местоположении недоступна";
};

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
    console.log("position", position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    geolocation.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
};

btn.addEventListener("click", () => {
    screensize.textContent = `Размер экрана: ${window.screen.width}x${window.screen.height}`;
    if (!navigator.geolocation) {
        geolocation.textContent = "Geolocation не поддерживается вашим браузером";
    } else {
        geolocation.textContent = "Определение местоположения…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
});
