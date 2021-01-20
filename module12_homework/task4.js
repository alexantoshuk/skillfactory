// Задание 4.

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

//     Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
//     Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
//     У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
//     Создать экземпляры каждого прибора;
//     Вывести в консоль и посмотреть результаты работы, гордиться собой :)

// Общие требования:

//     Имена функций, свойств и методов должны быть информативными
//     Соблюдать best practices:

//     использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//     информативные имена (а не a, b);
//     четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//     использование синтаксиса es6 (кроме функции-конструкторов) и т.д.


function ElectroDevice(type, power, switchedOn = false) {
    this.type = type;
    this.name;
    this.power = power;
    this.switchedOn = switchedOn;
    this.isSwitchedOn = () => this.switchedOn;
    this.turnOn = () => { this.switchedOn = true };
    this.turnOff = () => { this.switchedOn = false };
    this.reportState = () => {
        let state = this.switchedOn ? "on" : "off";
        let power = this.switchedOn ? this.power : 0;
        console.log(`\n=== Report about device "${this.type} ${this.name}" ===`);
        console.log(`Device is ${state}`);
        console.log(`Power consumption: ${power}W`);
    };
}


function Computer(name, power, CPUCores, CPUFreq, RAM, storage) {
    Computer.prototype.name = name;
    Computer.prototype.type = "Computer";
    Computer.prototype.power = power;
    this.CPUFreq = CPUFreq;
    this.CPUCores = CPUCores;
    this.RAM = RAM;
    this.storage = storage;
    this.scale = (x) => {
        this.CPUFreq *= x;
        this.CPUCores *= x;
        this.RAM *= x;
        this.storage *= x;
    }

    this.reportState = () => {
        Computer.prototype.reportState();
        console.log(`CPU Cores Number: ${this.CPUCores}`);
        console.log(`CPU Frequency: ${this.CPUFreq}GHz`);
        console.log(`RAM: ${this.RAM}Gb`);
        console.log(`Storage: ${this.storage}Tb`);
    };
}
Computer.prototype = new ElectroDevice();


function Lamp(name, power, temperature) {
    Lamp.prototype.name = name;
    Lamp.prototype.type = "Lamp";
    Lamp.prototype.power = power;

    this.temperature = temperature;
    this.dimLight = (x) => {
        Lamp.prototype.power *= x;
    };
    this.reportState = () => {
        Lamp.prototype.reportState();
        console.log(`Temperature: ${this.temperature}K`);
    };
}
Lamp.prototype = new ElectroDevice();


const myLamp = new Lamp("Phillips E-123", 25, 3000);
myLamp.reportState();
myLamp.turnOn();
myLamp.reportState();
myLamp.dimLight(0.5);
myLamp.reportState();


const laptop = new Computer("Asus ZenBook UX533", 300, 4, 2, 32, 2);
laptop.reportState();
laptop.turnOn();
laptop.reportState();
laptop.scale(2);
laptop.reportState();