// Задание 4.
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.


const min = 0;
const max = 100;
let r = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Random number in range [${min},${max}]: ${r}`);
