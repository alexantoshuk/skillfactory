// Задание 5.
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.


// Recursion version
function powR(x, n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return x;
    }
    return x * powR(x, n - 1);
}

// Arrow version
let pow = (x, n) => {
    if (n == 0) {
        return 1;
    }
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
};


function test(fn, x, times = 5) {
    for (let n = 0; n <= times; n++) {
        let result = fn(x, n);
        console.log(`${x}^${n} = ${result}`);
    }
}

// Recursion function test
console.log("Recursion version:")
test(powR, 2, 5);

// Arrow function test
console.log("\nArrow version:")
test(pow, 2, 5);


