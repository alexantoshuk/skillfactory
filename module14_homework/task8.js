// Задание 8.

// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

//         Заголовок первого input — «номер страницы».
//         Заголовок второго input — «лимит».
//         Заголовок кнопки — «запрос».

// При клике на кнопку происходит следующее:

//         Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
//         Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
//         Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
//         Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10,
//         где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 

// Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.

// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).


// https://codepen.io/alexantoshuk/pen/wvoJzJR?editors=1010


const imagesNode = document.querySelector("#images");
const infoNode = document.querySelector("#info");

let data = localStorage.getItem("images");
if (data) {
    ok(JSON.parse(data));
}

function request(url, ok, err) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            ok(data);
        })
        .catch(() => {
            err("Ошибка запроса");
            console.log("error");
        });
}

function ok(data) {
    let imagesHTML = [];

    for (let item of data) {
        imagesHTML.push(`
    <div class="column">
    <figure class="image">
      <img lowsrc="${item.url}" src="${item.download_url}"/>
    </figure>
    </div>
`);

        localStorage.setItem("images", JSON.stringify(data));
    }

    infoNode.innerHTML = "";
    imagesNode.innerHTML = imagesHTML.join("\n");
}

function err(info) {
    infoNode.innerHTML = `<p>${info}</p>`;
    imagesNode.innerHTML = "";
    localStorage.setItem("images", "");
}

function check(_page, _limit) {
    let page = +_page;
    let limit = +_limit;
    let pageInRange = !isNaN(page) && page >= 1 && page <= 10;
    let limitInRange = !isNaN(limit) && limit >= 1 && limit <= 10;

    if (!pageInRange && !limitInRange) {
        err("Номер страницы и лимит вне диапазона от 1 до 10");
        return false;
    }

    if (!pageInRange) {
        err("Номер страницы вне диапазона от 1 до 10");
        return false;
    }
    if (!limitInRange) {
        err("Лимит вне диапазона от 1 до 10");
        return false;
    }

    return true;
}

document.querySelector("#get-data").onclick = () => {
    const page = document.querySelector("#page-num").value;
    const limit = document.querySelector("#limit").value;
    if (check(page, limit))
        request(
            `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
            ok,
            err
        );
};
