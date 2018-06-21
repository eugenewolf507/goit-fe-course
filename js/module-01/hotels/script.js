"use strict";

const SHARM_PLACE = 15;
const HURGADA_PLACE = 25;
const TABA_PLACE = 6;

const enjoyMessage = "Приятного путешествия в группе ";
const questionMessage = "Cогласны ли Вы забронировать места в отеле ";
const regretMessage = "Нам очень жаль, приходите еще!";

let needPlace = Number(prompt("Введите число необходимых мест:"));
let result;

if (Number.isNaN(needPlace) === true) {
  alert("Ошибка ввода");
} else if (
  needPlace <= SHARM_PLACE &&
  needPlace <= HURGADA_PLACE &&
  needPlace <= TABA_PLACE
) {
  result = confirm(
    "Места есть в трех отелях: Sharm, Hurgada, Taba. " +
      questionMessage +
      "Sharm"
  );
  if (result == true) {
    alert(enjoyMessage + "Sharm");
  } else {
    result = confirm(questionMessage + "Hurgada");
    if (result == true) {
      alert(enjoyMessage + "Hurgada");
    } else {
      result = confirm(questionMessage + "Taba");
      if (result == true) {
        alert(enjoyMessage + "Taba");
      } else {
        alert(regretMessage);
      }
    }
  }
} else if (needPlace <= SHARM_PLACE && needPlace <= HURGADA_PLACE) {
  result = confirm(
    "Места есть в двух отелях: Sharm, Hurgada. " + questionMessage + "Sharm"
  );
  if (result == true) {
    alert(enjoyMessage + "Sharm");
  } else {
    result = confirm(questionMessage + "Hurgada");
    if (result == true) {
      alert(enjoyMessage + "Hurgada");
    } else {
      alert(regretMessage);
    }
  }
} else if (needPlace <= HURGADA_PLACE && needPlace <= TABA_PLACE) {
  result = confirm(
    "Места есть в двух отелях: Hurgada, Taba. " + questionMessage + "Sharm"
  );
  if (result == true) {
    alert(enjoyMessage + "Hurgada");
  } else {
    result = confirm(questionMessage + "Taba");
    if (result == true) {
      alert(enjoyMessage + "Taba");
    } else {
      alert(regretMessage);
    }
  }
} else if (needPlace <= SHARM_PLACE && needPlace <= TABA_PLACE) {
  result = confirm(
    "Места есть в двух отелях: Sharm, Taba. " + questionMessage + "Sharm"
  );
  if (result == true) {
    alert(enjoyMessage + "Sharm");
  } else {
    result = confirm(questionMessage + "Taba");
    if (result == true) {
      alert(enjoyMessage + "Taba");
    } else {
      alert(regretMessage);
    }
  }
  /* Следующие три сравнения сделаны для того, 
что бы при изменении начальных данных 
в количестве мест в отелях const SHARM_PLACE, HURGADA_PLACE и
TABA_PLACE не требовалось бы измененияе кода */
} else if (needPlace <= SHARM_PLACE) {
  result = confirm(
    "Места есть только в отеле Sharm. " + questionMessage + "Sharm"
  );
  if (result == true) {
    alert(enjoyMessage + "Sharm");
  } else {
    alert(regretMessage);
  }
} else if (needPlace <= HURGADA_PLACE) {
  result = confirm(
    "Места есть только в отеле Hurgada. " + questionMessage + "Hurgada"
  );
  if (result == true) {
    alert(enjoyMessage + "Hurgada");
  } else {
    alert(regretMessage);
  }
} else if (needPlace <= TABA_PLACE) {
  result = confirm(
    "Места есть только в отеле Taba. " + questionMessage + "Taba"
  );
  if (result == true) {
    alert(enjoyMessage + "Taba");
  } else {
    alert(regretMessage);
  }
} else {
  alert("Извините, столько мест нет ни в одной группе!");
}