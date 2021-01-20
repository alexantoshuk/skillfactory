// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
// и значения только собственных свойств. Данная функция не должна возвращать значение.


function logOwnedProperties(obj) {
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            val = obj[p];
            console.log(`${p} : ${val}`);
        }
    }

}

function logProperties(obj) {
    for (let p in obj) {
        val = obj[p];
        console.log(`${p} : ${val}`);
    }

}

const food = {
    sweet: true,
}

const fruit = Object.create(food);
fruit.name = "Apple";


logOwnedProperties(fruit);
// logProperties(fruit);

