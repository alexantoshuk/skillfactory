
// Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.


function isPrimeNumber(num) {
    if (num > 1000) {
        return;
    }

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;

}

function logNumberType(num) {

    switch (isPrimeNumber(num)) {
        case true:
            console.log(`${num}: prime number`);
            break;
        case false:
            console.log(`${num}: not a prime number`);
            break;
        default:
            console.log(`${num}: invalid number`);
    }
}


num = 4;

logNumberType(num);
