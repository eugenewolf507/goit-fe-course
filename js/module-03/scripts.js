"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const messageErrorLoginLength = "Ошибка! Логин должен быть от 4 до 16 символов";
const messageLoginAdded = "Логин успешно добавлен!";
const messageErrorLoginExist = "Такой логин уже используется!";

const login = prompt("Введите, пожалуйста, логин.");
// alert(login.length);

const checkLoginValidity = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

// alert (checkLoginValidity(login));

const checkIfLoginExists = (logins, login) => {
  for (const value of logins) {
    if (value === login) {
      return true;
    }
  }
  return false;
};

// alert(checkIfLoginExists(logins, login));

const addLogin = (logins, login) => {
  if (checkLoginValidity(login) === false) {
    return alert(messageErrorLoginLength);
  } else {
    if (checkIfLoginExists(logins, login) === false) {
      logins.push(login);
      alert(messageLoginAdded);
    } else {
      alert(messageErrorLoginExist);
    }
  }
};

addLogin(logins, login);
alert("logins : " + logins);