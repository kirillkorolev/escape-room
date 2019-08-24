'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.js-page-header-toggle');

var modalTown = document.querySelector('.town');
var townOpenButton = document.querySelector('.js-town-link');
var townCloseButton = document.querySelector('.js-town-close-toggle');
var blackout = document.querySelector('.blackout');

var modalQuestion = document.querySelector('.question');
var questionOpenButton = document.querySelector('.js-question-link');
var questionCloseButton = document.querySelector('.js-question-close-toggle');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--menu-closed')) {
    pageHeader.classList.remove('page-header--menu-closed');
    pageHeader.classList.add('page-header--menu-opened');
  } else {
    pageHeader.classList.add('page-header--menu-closed');
    pageHeader.classList.remove('page-header--menu-opened');
  }
});

townOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalTown.classList.remove('town--hidden');
  modalTown.classList.add('town--visible');
  blackout.classList.remove('blackout--none');
});

townCloseButton.addEventListener('click', function () {
  modalTown.classList.remove('town--visible');
  modalTown.classList.add('town--hidden');
  blackout.classList.add('blackout--none');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalTown.classList.contains('town--visible')) {
      modalTown.classList.remove('town--visible');
      modalTown.classList.add('town--hidden');
      blackout.classList.add('blackout--none');
    }
  }
});

questionOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalQuestion.classList.remove('question--hidden');
  modalQuestion.classList.add('question--visible');
  blackout.classList.remove('blackout--none');
});

questionCloseButton.addEventListener('click', function () {
  modalQuestion.classList.remove('question--visible');
  modalQuestion.classList.add('question--hidden');
  blackout.classList.add('blackout--none');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalQuestion.classList.contains('question--visible')) {
      modalQuestion.classList.remove('question--visible');
      modalQuestion.classList.add('question--hidden');
      blackout.classList.add('blackout--none');
    }
  }
});
