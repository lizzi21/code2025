//1 проверка возрааста
const age = prompt("Введите ваш возраст:");
if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

//2 Сравнение чисел
const num1 = prompt("Введите первое число:");
const num2 = prompt("Введите второе число:");

if (num1 > num2) {
    console.log("Первое число больше");
} else if (num1 < num2) {
    console.log("Второе число больше");
} else {
    console.log("Числа равны");
}

//3 Определение чётности
const number = prompt("Введите число:");
if (number % 2 === 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}
