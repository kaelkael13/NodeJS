const colors = require('colors');

const args = process.argv.slice(2).map(Number); // Принимаем значения пользователя и приводим их к числу
const primeNumbers = [];

nextPrime:
for (let i = 0; args[i] <= args[1]; args[i]++) { // Проходим по числам массива

    for (let j = 2; j < args[i]; j++) { // Проверка на простое число
        if (args[i] % j == 0) continue nextPrime; // Не подходит, берём следующее
    }

    primeNumbers.push(args[i]) // Подходит, пушим в массив
}

if (isNaN(args[0]) || isNaN(args[1])) { // Проверка на то, что значения являются числами
    console.log(colors.red('Values ​​must be numbers'));

} else if (primeNumbers[0] == undefined) { // Присутствуют ли простые числа в заданном диапазоне
    console.log(colors.red('There are no prime numbers in this range'));

} else { // Выводим простые числа в консоль цветами светофора

    for (i = 0; i < primeNumbers.length; i++) {

        if (i % 3 == 0) {
            console.log(colors.green(primeNumbers[i]));

        } else if (i % 3 == 1) {
            console.log(colors.yellow(primeNumbers[i]));

        } else {
            console.log(colors.red(primeNumbers[i]));
        }
    }
}





