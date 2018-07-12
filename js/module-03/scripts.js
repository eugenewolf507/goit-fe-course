"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const messageErrorLoginLength = "Ошибка! Логин должен быть от 4 до 16 символов";
const messageLoginAdded = "Логин успешно добавлен!";
const messageErrorLoginExist = "Такой логин уже используется!";

const login = prompt("Введите, пожалуйста, логин.");

const checkLoginValidity = login => login.length >= 4 && login.length <= 16;
const checkIfLoginExists = (logins, login) => logins.includes(login);

const addLogin = (logins, login) => {
  if (checkLoginValidity(login) === false) {
    alert(messageErrorLoginLength);
  } else {
    if (checkIfLoginExists(logins, login)) {
      alert(messageErrorLoginExist);
    } else {
      logins.push(login);
      alert(messageLoginAdded);
    }
  }
};

addLogin(logins, login);
alert("logins : " + logins);