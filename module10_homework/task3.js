let myString = "Длинная строка";
let array = myString.split("");
let reversedArray = array.reverse();
let reversedStr = reversedArray.join("");
console.log(`"${myString}" -> "${reversedStr}"`);