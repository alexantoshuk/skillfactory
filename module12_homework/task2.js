// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


function isPropertyExist(obj, propName) {
    return propName in obj;
}

let testObj = { name: "Anna", edge: 23 };


function logTest(propName) {
    if (isPropertyExist(testObj, propName)) {
        console.log(`Property '${propName}' in 'testObj'`);
    } else {
        console.log(`Property '${propName}' not in 'testObj'`);
    }
}

logTest("name");
logTest("blabla");
