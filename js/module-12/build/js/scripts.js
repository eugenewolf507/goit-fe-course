"use strict";

var urlInputForm = document.querySelector("#urlInputForm");
var urlsList = [];
var apiKey = "5bbc427db184bade881089c46d1ce94309e553dcca374";
// const apiKey = "5bb920a205cea06f38e7909709a72b521a4a9d1c05841";

urlsList = JSON.parse(localStorage.getItem('urlsList')); //read from local storage
if (urlsList.length) {
  //fetch for output urls list from local storage
  urlsList.forEach(function (urlAdres) {
    linkpreviewAPI(urlAdres).then(function (data) {
      outputHandlebars(data);
    });
  });
}

urlInputForm.addEventListener("submit", addUrl);

function addUrl(event) {
  event.preventDefault();
  var urlAdres = urlInputForm.urlInput.value;

  //fetch for add and output url from form input
  linkpreviewAPI(urlAdres).then(function (data) {
    var checkUrlRepeat = function checkUrlRepeat(val) {
      return val === data.url;
    };
    if (urlsList.some(checkUrlRepeat)) {
      alert("Такая закладка уже есть");
    } else {
      urlsList.unshift(data.url); //write url to array
      localStorage.setItem('urlsList', JSON.stringify(urlsList)); //write urls array to Local storage
      outputHandlebars(data);
    }
  });
  urlInputForm.reset();
}

function deleteCard(target) {
  var card = target.parentElement.parentElement;
  var url4Delete = card.querySelector('h3').textContent;
  var indexOfUrl4Delete = urlsList.indexOf(url4Delete);

  urlsList.splice(indexOfUrl4Delete, 1);
  localStorage.setItem('urlsList', JSON.stringify(urlsList));
  card.remove();
}

function linkpreviewAPI(urlAdres) {
  return fetch("https://api.linkpreview.net/?key=" + apiKey + "&q=" + urlAdres).then(function (response) {
    if (response.ok) return response.json();
    throw new Error("Error fetching data");
  }).catch(function (error) {
    console.error("Error: ", error);
  });
}

function outputHandlebars(data) {
  var source = document.querySelector("#output").innerHTML.trim();
  var template = Handlebars.compile(source);
  var markup = template(data);
  var container = document.querySelector("#output-container");
  container.innerHTML = markup + container.innerHTML;
}