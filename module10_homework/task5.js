let myArray = [1, 2, 3, 4, 5, 6512, 6, 2, 5, 3, 4];
console.log(`Длина массива: ${myArray.length}\n\n`);
myArray.map(function (item, index) {
    console.log(`Элемент ${index}: ${item}`);
    return item;
});