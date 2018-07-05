let userInput;
const numbers = [];
let total = 0;

const CANCEL_MESSAGE = "Отмена пользователем";
const ERROR_MESSAGE = "Было введено не число, попробуйте еще раз";

do {
  userInput = prompt("Введите число");
  if (userInput === null) {
    break;
  }
  userInput = Number(userInput);
  if (Number.isNaN(userInput) === true) {
    alert(ERROR_MESSAGE);
  } else {
    numbers.push(userInput);
  }
} while (userInput !== null);

// numbers.pop();
// can be used instead of
// if (userInput===null) {
//   break;
// }

let result = 0;
for (const value of numbers) {
  result +=value;
}

if (result !== 0) {
  alert (`Общая сумма чисел равна ${result}`);
}
