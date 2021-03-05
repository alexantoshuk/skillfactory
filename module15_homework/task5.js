// Задание 5.

// Реализовать чат на основе эхо-сервера wss://echo.websocket.org/

// Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».

// При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.

// Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.

// Добавить в чат механизм отправки гео-локации:

//     При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на https://www.openstreetmap.org/
//     с вашей гео-локацией. Сообщение, которое отправит обратно эхо-сервер, не выводить.

// https://codepen.io/alexantoshuk/pen/NWbBOMK?editors=1111



const msgerForm = document.querySelector(".msger-inputarea");
const msgerGeoBtn = document.querySelector(".msger-geo-btn");
const msgerInput = document.querySelector(".msger-input");
const msgerChat = document.querySelector(".msger-chat");

const BOT_NAME = "Bot";
const PERSON_NAME = "You";

if (!navigator.geolocation) {
    msgerGeoBtn.style.display = "none";
}

const websocket = new WebSocket("wss://echo.websocket.org/");

websocket.onopen = (e) => console.log("Connected");
websocket.onclose = (e) => console.log("Disconnected");
websocket.onerror = (e) => {
    console.log("Connection error");
};
websocket.onmessage = (e) => {
    let msg = e.data;
    console.log(msg);
    if (!isLocation(msg)) appendMessage(BOT_NAME, "left", msg);
};

msgerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage(PERSON_NAME, "right", msgText);
    msgerInput.value = "";
    websocket.send(msgText);
});

msgerGeoBtn.addEventListener("click", (event) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            let loc = `${latitude}°, ${longitude}°`;
            let msg = `<a href="https://www.openstreetmap.org/#map=12/${latitude}/${longitude}" target="_blank">${loc}</a>`;
            appendMessage(PERSON_NAME, "right", msg);
            msgerInput.value = "";
            websocket.send(loc);
        },
        () => {
            appendMessage(PERSON_NAME, "right", "Geo-location error");
            msgerInput.value = "";
        }
    );
});

function appendMessage(name, side, text) {
    //   Simple solution for small apps
    const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}

// utils

function formatDate(date) {
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");

    return `${h}:${m}`;
}

function isLocation(str) {
    var count = (str.match(/°/g) || []).length;
    return count === 2;
}
