// Задание 7.

// Написать код приложения, интерфейс которого состоит из поля ввода и кнопки «Получить список задач».
// При нажатии на кнопку нужно отправить запрос с помощью fetch на URL https://jsonplaceholder.typicode.com/users/3/todos.
// Число 3 представляет собой id пользователя, вместо него нужно подставить число, введенное в поле.
// Если пользователь с таким id существует, вернется список задач для этого пользователя, каждая задача представлена объектом вида:

// {
//     "userId": 3,
//     "id": 43,
//     "title": "tempore ut sint quis recusandae",
//     "completed": true
// }

// Где title — описание задачи, а completed — флаг, отображающий, выполнена задача или нет.
// Вывести данный список на страницу, оформив соответствующим образом: в виде списка (ul или ol),
// выполненные задачи должны быть написаны зачеркнутым текстом. Если пользователь с введенным id не существует, вывести сообщение:

// «Пользователь с указанным id не найден».

// https://codepen.io/alexantoshuk/pen/vYyxGrB?editors=1010


const listNode = document.querySelector("#tasks");
const infoNode = document.querySelector("#info");

function useFetch(url, ok, err) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.length == 0) err("Пользователь с указанным id не найден");
            else ok(data);
        })
        .catch(() => {
            err("Ошибка запроса");
            console.log("error");
        });
}

function ok(data) {
    let listHTML = [];
    let userId;
    for (let task of data) {
        userId = task.userId;
        if (task.completed) listHTML.push(`<li><u>${task.title}</u></li>`);
        else listHTML.push(`<li>${task.title}</li>`);
    }

    infoNode.innerHTML = `<p>Список задач для пользователя с id ${userId}:</p>`;
    listNode.innerHTML = listHTML.join("\n");
}

function err(info) {
    infoNode.innerHTML = `<p>${info}</p>`;
    listNode.innerHTML = "";
}

document.querySelector("#get-tasks").onclick = () => {
    const userId = document.querySelector("#user-id").value;
    useFetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
        ok,
        err
    );
};
