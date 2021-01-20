// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:

//     Имена классов, свойств и методов должны быть информативными;
//     Соблюдать best practices;
//     Использовать синтаксис ES6.


class ElectroDevice {
    constructor(type, power, switchedOn = false) {
        this.type = type;
        this.name;
        this.power = power;
        this.switchedOn = switchedOn;
    }

    isSwitchedOn() {
        return this.switchedOn;
    }

    turnOn() {
        this.switchedOn = true;
    }

    turnOff() {
        this.switchedOn = false;
    }

    reportState() {
        let state = this.switchedOn ? "on" : "off";
        let power = this.switchedOn ? this.power : 0;
        console.log(`\n=== Report about device "${this.type} ${this.name}" ===`);
        console.log(`Device is ${state}`);
        console.log(`Power consumption: ${power}W`);
    }
}


class Computer extends ElectroDevice {
    constructor(name, power, CPUCores, CPUFreq, RAM, storage) {
        super("Computer", power);
        this.name = name;

        this.CPUFreq = CPUFreq;
        this.CPUCores = CPUCores;
        this.RAM = RAM;
        this.storage = storage;

    }

    scale(x) {
        this.CPUFreq *= x;
        this.CPUCores *= x;
        this.RAM *= x;
        this.storage *= x;
    }

    reportState() {
        super.reportState();
        console.log(`CPU Cores Number: ${this.CPUCores}`);
        console.log(`CPU Frequency: ${this.CPUFreq}GHz`);
        console.log(`RAM: ${this.RAM}Gb`);
        console.log(`Storage: ${this.storage}Tb`);
    }
}


class Lamp extends ElectroDevice {
    constructor(name, power, temperature) {
        super("Lamp", power);
        this.name = name;
        this.temperature = temperature;
    }

    dimLight(x) {
        this.power *= x;
    }

    reportState() {
        super.reportState();
        console.log(`Temperature: ${this.temperature}K`);
    }
}


const laptop = new Computer("Asus ZenBook UX533", 300, 4, 2, 32, 2);
laptop.reportState();
laptop.turnOn();
laptop.reportState();
laptop.scale(2);
laptop.reportState();


const myLamp = new Lamp("Phillips E-123", 25, 3000);
myLamp.reportState();
myLamp.turnOn();
myLamp.reportState();
myLamp.dimLight(0.5);
myLamp.reportState();
