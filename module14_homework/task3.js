// Задание 3.

// Дан JSON-файл с информацией о выручке фирмы по кварталам за период с 2017 по 2019 год. Файл доступен по этой ссылке.
// Вам нужно написать код приложения, интерфейс которого состоит из:

//         выпадающего списка (использовать тег select, подробная документация здесь), в котором можно выбрать год с 2017 по 2018;
//         кнопки «Загрузить отчет».

// Пользователь выбирает год в списке и нажимает кнопку «Загрузить отчет».
// Если год не выбран, вывести сообщение «Выберите, пожалуйста, год».
// Если год выбран, отправить XHR-запрос к JSON-файлу, используя URL, указанный выше, обработать его содержимое
// и вывести информацию о выручке в выбранном году в виде таблицы.


// Задание 4* (факультативное).

// Доработать приложение из предыдущего задания: при нажатии на кнопку «Загрузить отчет» вывести помимо таблицы ссылку «Открыть график»,
// которая будет вести на сервис для динамического создания графиков Quickchart.io.

// https://codepen.io/alexantoshuk/pen/yLVYdGv?editors=1010


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
const linkNode = document.querySelector("#graphics-link");

function updateTable(data) {
    const year = document.querySelector("#year-select").value;

    let selectedItem;
    for (const item of data) {
        if (item.year == year) {
            selectedItem = item;
            break;
        }
    }
    console.log(selectedItem);
    sales = selectedItem.sales;


    const linkHTML = `
    <a href="https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${year} год',data:[${sales.q1},${sales.q2},${sales.q3},${sales.q4}]}]}}" >Открыть график</a>
    `;


    const tableHTML = `
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

    linkNode.innerHTML = linkHTML;
    tableNode.innerHTML = tableHTML;
}


document.querySelector("#get-report").onclick = () => useRequest("https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440", updateTable);

document.querySelector("#clear-report").onclick = () => {
    linkNode.innerHTML = "";
    tableNode.innerHTML = "";
};

