// let gradus = document.getElementById("gradus");
// let fahren = document.getElementById("fahren");

// function gradusOnChange() {
//   console.log("gradus", gradus.value);
//   fahren.value = gradus.value;
// }

/* Задача 1 
let num1 = parseFloat(prompt("Введите число num1:"));
let num2 = parseFloat(prompt("Введите число num2:"));
if (num1 <= 1 && num2 >= 3) {
    console.log('num1 меньше или равно 1, num2 больше или равно 3');
}else {
    console.log('Условие не совпадает');
}
*/

/* Задача 2

let test = true;

console.log((test === true) ? '+++' : '---');*/

/*Задача 3

let day = parseInt(prompt("Введите число от 1 до 31:"));

if (day >= 1 && day <= 10) {
  console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
  console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
  console.log("Третья декада");
} else {
  console.log("Число вне диапазона 1-31");
}
  */

/* Задача1 
function cube(num) {
  return num ** 3;
}
console.log(cube(2) + cube(3)); */

/*Задача 2 
function calculateSalary() {
  let input = prompt("Введите число:");
  let number = parseFloat(input);
  
  if (isNaN(number)) {
      console.log("Значение задано неверно");
  } else {
      let salaryAfterTax = number * 0.87; 
      console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTax}`);
  }
}

calculateSalary();
*/

/*Задача 3
function findMax() {
  let num1 = parseFloat(prompt("Введите первое число:"));
  let num2 = parseFloat(prompt("Введите второе число:"));
  let num3 = parseFloat(prompt("Введите третье число:"));
  
  let max = Math.max(num1, num2, num3);
  console.log(`Максимальное значение: ${max}`);
}

findMax();
*/

/*Задача 3
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a === b ? 0 : Math.abs(a - b); 
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add(2, 6)); 
console.log(subtract(10, 3)); 
console.log(multiply(3, 4)); 
console.log(divide(12, 4)); 
*/

/*let fahren = document.getElementById("fahren")
let celsius = document.getElementById("text")
function convertCelsiusToFahrengate(event) {
 console.log("convertCelsiusToFahrengate works", event.type)
  fahren.value = (parseInt(event.target.value) * 9/5) + 32
}

function convertFahrengateToCelsius(event) {
  celsius.value = (parseInt(event.target.value) - 32) * 5/9
 console.log("convertFahrengateToCelsius works", event.type)
}

let secund = document.getElementById("sec");
let minute = document.getElementById("minute");

console.log(secund)

function convertMinToSec(event) {
  console.log("convertMinToSec works", event.type);
  secund.value = parseInt(event.target.value) * 60
}

function convertSecToMin(event) {
  minute.value = parseInt(event.target.value) / 60 ;
  console.log("convertSecToMin works", event.type);
}


let kilometer = document.getElementById("kilometer");
let meter = document.getElementById("meter");

console.log(kilometer)

function convertMeterToKm(event) {
  console.log("convertMeterToKm works", event.type);
  kilometer.value = parseInt(event.target.value) * 1000
}

function convertKmToMeter(event) {
  meter.value = parseInt(event.target.value) / 1000 ;
  console.log("convertKmToMeter works", event.type);
}*/

/* Создаем функцию которая  передаем имя, фамилия и возраст и в консоле получаем Привет имя, фамилия и возраст пользователа

function allUserInfo(name, surname, age) {
  console.log(`Привет ${name} ${surname } с возрастом ${age}`);
}
allUserInfo('Хандон', 'Дивлохчиева', 22);
*/

/* Cоздаем функцию которая возводит данную числу в квадрат

function pow(num) {
  console.log(num ** 2);
}
pow(5)*/

/*Создаем функцию которая параметром принимает число и проверяет положительное ли оно или отрицательное.Если положительное то +++ елси нет то ----

function checkNum(num) {
(num%2==0) ?console.log('+++') : console.log('---');
}
checkNum(20)*/



/* Создаем функцию которая принимает 3 числа и выводит в консоль их сумму

function sumNum(a, b, c) {
  console.log(a+b+c);
}
sumNum(5, 10, 20);
*/

/* C помошью созданную нашу функцию выводим в консоль сумму значнений этих переменных

let param1 = 1
let param2 = 2
let param3 = 3*/

/*function sumNum(a, b, c) {
  console.log(a+b+c);
}
let param1 = 1
let param2 = 2
let param3 = 3

sumNum(param1, param2,param3)*/