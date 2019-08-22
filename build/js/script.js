'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--menu-closed')) {
    pageHeader.classList.remove('page-header--menu-closed');
    pageHeader.classList.add('page-header--menu-opened');
  } else {
    pageHeader.classList.add('page-header--menu-closed');
    pageHeader.classList.remove('page-header--menu-opened');
  }
});

var modalTown = document.querySelector('.town');
var townOpenButton = document.querySelector('.contacts__town-link');
var townCloseButton = document.querySelector('.town__toggle');

townOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalTown.classList.remove('town--hidden');
  modalTown.classList.add('town--visible');
});

townCloseButton.addEventListener('click', function () {
  modalTown.classList.remove('town--visible');
  modalTown.classList.add('town--hidden');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalTown.classList.contains('town--visible')) {
      modalTown.classList.remove('town--visible');
      modalTown.classList.add('town--hidden');
    }
  }
});


var modalQuestion = document.querySelector('.question');
var questionOpenButton = document.querySelector('.question-link');
var questionCloseButton = document.querySelector('.question__toggle');

questionOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalQuestion.classList.remove('question--hidden');
  modalQuestion.classList.add('question--visible');
});

questionCloseButton.addEventListener('click', function () {
  modalQuestion.classList.remove('question--visible');
  modalQuestion.classList.add('question--hidden');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalQuestion.classList.contains('question--visible')) {
      modalQuestion.classList.remove('question--visible');
      modalQuestion.classList.add('question--hidden');
    }
  }
});
