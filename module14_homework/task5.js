// Задание 5.

// Написать скрипт, который при открытии страницы будет делать следующее:
// если пользователь зашел в первый раз, вывести окно prompt с сообщением:

// «Добро пожаловать! Назовите, пожалуйста, ваше имя».

// После того, как пользователь введет имя, записать имя, дату и время визита в localStorage.
// Подсказка: для определения текущей даты используйте new Date().
// Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих
// записей в localStorage), вывести в alert сообщение вида:

// «Добрый день, *имя пользователя*! Давно не виделись. В последний раз вы были у нас *дата последнего посещения*»

// и перезаписать дату последнего посещения.
// Дату можно вывести в любом удобочитаемом формате (не Timestamp, должен четко читаться день, месяц, год и время — часы и минуты).

// https://codepen.io/alexantoshuk/pen/Vwmedyy?editors=1011



// localStorage.clear();

var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

let date = localStorage.getItem("date");
if (!date) {
    let name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
    localStorage.setItem("date", Date.now());
    localStorage.setItem("user-name", name);
} else {
    let dateObj = new Date(+date);
    let name = localStorage.getItem("user-name");
    let dateString = dateObj.toLocaleString("ru", options);
    alert(
        `Добрый день, ${name}! Давно не виделись.\nВ последний раз вы были у нас ${dateString}`
    );
    localStorage.setItem("date", Date.now());
}
