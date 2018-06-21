"use strict";

const ADMIN_LOGIN = "admin";
const ADMIN_PASSWORD = "m4ngo1zh4ackz0r";

const CANCEL_MESSAGE = "Отменено пользователем!";
const WELCOME_MESSAGE = "Добро пожаловать!";
const DENIED_MESSAGE = "Доступ запрещен!";

let inputLogin = prompt("Пожалуйста, введите логин:");
if (inputLogin === null) {
  alert(CANCEL_MESSAGE);
} else if (inputLogin === ADMIN_LOGIN) {
  let inputPass = prompt("Пожалуйста, введите логин:");

  if (inputPass === null) {
    alert(CANCEL_MESSAGE);
  } else if (inputPass === ADMIN_PASSWORD) {
    alert(WELCOME_MESSAGE);
  } else {
    alert(DENIED_MESSAGE);
  }

} else {
  alert(DENIED_MESSAGE);
}

alert('Это был else if, теперь будет switch');

inputLogin = prompt("Пожалуйста, введите логин:");
switch (inputLogin) {
  case null:
    alert(CANCEL_MESSAGE);
    break;
  case ADMIN_LOGIN:
    let inputPass = prompt("Пожалуйста, введите логин:");
    switch (inputPass) {
      case null:
        alert(CANCEL_MESSAGE);
        break;
      case ADMIN_PASSWORD:
        alert(WELCOME_MESSAGE);
        break;
      default:
        alert(DENIED_MESSAGE);
    }
    break;
  default:
    alert(DENIED_MESSAGE);
}
