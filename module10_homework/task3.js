// Задание 3.
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


let myString = "Длинная строка";
let array = myString.split("");
let reversedArray = array.reverse();
let reversedStr = reversedArray.join("");
console.log(`"${myString}" -> "${reversedStr}"`);