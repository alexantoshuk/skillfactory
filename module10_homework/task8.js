// Задание 8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


let myMap = new Map([

    ["Alexander", 40],

    ["Nikolay", 15],

    ["Nick", 38],

    ["Mike", 35],

]);

for (const [key, value] of myMap.entries()) {
    console.log(`${key} — ${value}`);
}
