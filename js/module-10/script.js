"use strict";

const btnAll = document.querySelector("#js-btn-all");
const btnId = document.querySelector("#js-btn-id");
const btnAdd = document.querySelector("#js-btn-add");
const btnRm = document.querySelector("#js-btn-rm");
const btnUpd = document.querySelector("#js-btn-upd");

const outputTag = document.querySelector("#js-output");

const inputs = {
  idId: document.querySelector('input[name="byIdId"]'),
  addName: document.querySelector('input[name="addName"]'),
  addAge: document.querySelector('input[name="addAge"]'),
  removeId: document.querySelector('input[name="delId"]'),
  updateId: document.querySelector('input[name="updId"]'),
  updateName: document.querySelector('input[name="updName"]'),
  updateAge: document.querySelector('input[name="updAge"]')
};

function makeRequest(requestData) {
  return fetch(
    `https://test-users-api.herokuapp.com/users/${requestData.url}`,
    {
      method: requestData.method,
      body: JSON.stringify(requestData.body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .catch(error => {
      console.error("Error: ", error);
    });
}

const resultOutputGetAllUsers = (data, outputTag) => {//output data.data in table
  const dataResult = data.data;
    outputTag.innerHTML ="<tr><td>#</td><td>id</td><td>name</td><td>age</td></tr>";
    dataResult.forEach((num, idx) => {//output array in table
      outputTag.innerHTML += `<tr><td>${idx + 1}</td><td>${num.id}</td><td>${num.name}</td><td>${num.age}</td></tr>`;
    });  
};

const resultOutputAddUser = (data, outputTag) => {//output data.data in table, _id
  const dataResult = data.data;
  outputTag.innerHTML = `<tr><td>#</td><td>id</td><td>name</td><td>age</td></tr><tr><td>${1}</td><td>${dataResult._id}</td><td>${dataResult.name}</td><td>${dataResult.age}</td></tr>`;  
};

const resultOutputByIdRemUpd = (data, outputTag) => {//output data.data in table, id
  const dataResult = data.data;
  outputTag.innerHTML = `<tr><td>#</td><td>id</td><td>name</td><td>age</td></tr><tr><td>${1}</td><td>${dataResult.id}</td><td>${dataResult.name}</td><td>${dataResult.age}</td></tr>`;
};

const inputCleanUp = () => {//clean inputs value
  for (const input in inputs) {
    if (inputs.hasOwnProperty(input)) {
      inputs[input].value = "";
    }
  }
}

//выводит текущий список всех пользователей в БД.
const getAllUsers = event => {
  event.preventDefault();
  const requestData = {
    url: "",
  };
  makeRequest(requestData)
  .then(data => {
    resultOutputGetAllUsers(data, outputTag);
  })
};

//выводит пользователя с переданным id.
const getUserById = event => {
  event.preventDefault();
  const requestData = {
    url: inputs.idId.value,
  };
  makeRequest(requestData)
  .then(data => {
    resultOutputByIdRemUpd(data, outputTag);
    inputCleanUp();  
  })
};

//записывает в БД юзера с полями name и age.
const addUser = event => {
  event.preventDefault();
  const requestData = {
    url: "",
    method: "POST",
    body: {name: inputs.addName.value, age: inputs.addAge.value}
  };
  makeRequest(requestData)
  .then(data => {
    resultOutputAddUser(data, outputTag);
    inputCleanUp();  
  })
};

//обновляет данные пользователя по id.
const updateUser = event => {
  event.preventDefault();
  const newUser = {
    name: inputs.updateName.value,
    age: inputs.updateAge.value
  };
  const requestData = {
    url: inputs.updateId.value,
    method: "PUT",
    body: newUser
  };
  makeRequest(requestData)
  .then(data => {
    resultOutputByIdRemUpd(data, outputTag);
    inputCleanUp();  
  })
};

//удаляет из БД юзера по указанному id.
const removeUser = event => {
  event.preventDefault();
  const requestData = {
    url: inputs.removeId.value,
    method: "DELETE"
  };
  makeRequest(requestData)
  .then(data => {
    resultOutputByIdRemUpd(data, outputTag);
    inputCleanUp();  
  })
};

btnAll.addEventListener("click", getAllUsers);
btnId.addEventListener("click", getUserById);
btnAdd.addEventListener("click", addUser);
btnUpd.addEventListener("click", updateUser);
btnRm.addEventListener("click", removeUser);