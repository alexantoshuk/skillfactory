// Задание 6.

// Создать Promise, в котором c задержкой в 3 секунды сгенерировать случайное целое число от 1 до 100.
// Для создания задержки использовать setTimeout. Если сгенерированное число — четное, Promise выполнится успешно (resolve),
// если нечетное — выполнится с ошибкой (reject). После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:

//     «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
//     «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число 


const timeout = 3000;


let genRandomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let result = Math.floor(1 + Math.random() * 100);
        if (result % 2 == 0)
            resolve(result);
        else
            reject(result);
    }, timeout);

});


genRandomPromise
    .then((result) => {
        console.log(`Завершено успешно. Сгенерированное число — ${result}`);
    })
    .catch((result) => {
        console.log(`Завершено с ошибкой. Сгенерированное число — ${result}`);
    });

