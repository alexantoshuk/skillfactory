let input = prompt("Enter number");

if (input !== null) {

    num = +input;
    if (!isNaN(num) && typeof num === "number") {
        if (num % 2 === 0) {
            console.log("Вы ввели четное число");
        } else {
            console.log("Вы ввели нечетное число");
        }

    } else {
        console.log("Упс, кажется, вы ошиблись");
    }
}