// Task 8

let myMap = new Map([

    ["Alexander", 40],

    ["Nikolay", 15],

    ["Nick", 38],

    ["Mike", 35],

]);

for (const [key, value] of myMap.entries()) {
    console.log(`${key} — ${value}`);
}
