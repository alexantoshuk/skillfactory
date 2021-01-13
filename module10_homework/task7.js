let myArray = [1, 6, 5, 3, 4, "hello", 0, 4.3, 0, { "a": 1 }, NaN, null];

let even = 0;
let odd = 0;
let zero = 0;
let nan = 0;


for (let el of myArray) {
    if (typeof el !== "number" || isNaN(el)) {
        nan += 1;
        continue;
    }
    if (el === 0) {
        zero += 1;
        continue;
    }
    if (el % 2 === 0) {
        even += 1;
    } else {
        odd += 1;
    }
}

console.log(`
Кол-во четных элементов: ${even}
Кол-во нечетных элементов: ${odd}
Кол-во нулей: ${zero}
Кол-во элементов не являющихся числами: ${nan}
`);
