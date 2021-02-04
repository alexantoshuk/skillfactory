// Задание 2.

// Дан образец JSON-строки:

// {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}

// Ваша задача — создать JS-объект, который при преобразовании в JSON будет возвращать в качестве результата
// такую же JSON-строку, как в образце. Получившуюся строку вывести в консоль.


const newObject = {
    "name": "Anton",
    "age": 36,
    "skills": ["Javascript", "HTML", "CSS"],
    "salary": 80000
}

const json = JSON.stringify(newObject);
console.log(json);