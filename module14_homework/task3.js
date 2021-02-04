// Задание 3.

// Дан JSON-файл с информацией о выручке фирмы по кварталам за период с 2017 по 2019 год. Файл доступен по этой ссылке.
// Вам нужно написать код приложения, интерфейс которого состоит из:

//         выпадающего списка (использовать тег select, подробная документация здесь), в котором можно выбрать год с 2017 по 2018;
//         кнопки «Загрузить отчет».

// Пользователь выбирает год в списке и нажимает кнопку «Загрузить отчет».
// Если год не выбран, вывести сообщение «Выберите, пожалуйста, год».
// Если год выбран, отправить XHR-запрос к JSON-файлу, используя URL, указанный выше, обработать его содержимое
// и вывести информацию о выручке в выбранном году в виде таблицы.


function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        // console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`);
        const result = JSON.parse(xhr.response);
        if (callback) {
            callback(result);
        }
    };

    xhr.onerror = function () {
        console.log('Ошибка запроса');
    };

    xhr.open("get", url, true);
    xhr.send();
}


const tableNode = document.querySelector("#result-table");


function updateTable(data) {
    const year = document.querySelector("#year-select").value;

    let selectedItem;
    for (const item of data) {
        if (item.year == year) {
            selectedItem = item;
            break;
        }
    }

    sales = selectedItem.sales;
    console.log(sales);

    const html = `
    <thead>
        <tr>
          <th><abbr title="1 квартал">1 кв.</abbr></th>
          <th><abbr title="2 квартал">2 кв.</abbr></th>
          <th><abbr title="3 квартал">3 кв.</abbr></th>
          <th><abbr title="4 квартал">4 кв.</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${sales.q1}</td>
          <td>${sales.q2}</td>
          <td>${sales.q3}</td>
          <td>${sales.q4}</td>
        </tr>
      </tbody>
    `;

    tableNode.innerHTML = html;
}


document.querySelector("#get-report").onclick = () => useRequest("https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440", updateTable);

document.querySelector("#clear-report").onclick = () => { tableNode.innerHTML = "" };

