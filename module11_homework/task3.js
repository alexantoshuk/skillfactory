
// Задание 3.
// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function partialSum(arg1) {
    let sumFunc = function (arg2) {
        return arg1 + arg2;
    }
    return sumFunc;
}

let arg1 = 5;
let arg2 = 6;

let sum = partialSum(arg1)(arg2);
console.log(`${arg1} + ${arg2} = ${sum}`);
