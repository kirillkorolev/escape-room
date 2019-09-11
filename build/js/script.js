'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.js-page-header-toggle');

  var modalTown = document.querySelector('.town');
  var townOpenButton = document.querySelector('.js-town-link');
  var townCloseButton = document.querySelector('.js-town-close-toggle');
  var blackout = document.querySelector('.blackout');

  var modalQuestion = document.querySelector('.question');
  var questionOpenButton = document.querySelector('.js-question-link');
  var questionCloseButton = document.querySelector('.js-question-close-toggle');

  var questionOpenButtonMobile = document.querySelector(
      '.js-question-mobile-link'
  );

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--menu-closed')) {
      pageHeader.classList.remove('page-header--menu-closed');
      pageHeader.classList.add('page-header--menu-opened');
    } else {
      pageHeader.classList.add('page-header--menu-closed');
      pageHeader.classList.remove('page-header--menu-opened');
    }
  });

  var openPopup = function (hiddenClass, visibleClass, openButton, popup) {
    if (openButton) {
      openButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.remove(hiddenClass);
        popup.classList.add(visibleClass);
        blackout.classList.remove('blackout--none');
      });
    }
  };

  var closePopup = function (hiddenClass, visibleClass, closeButton, popup) {
    if (closeButton) {
      closeButton.addEventListener('click', function () {
        popup.classList.remove(visibleClass);
        popup.classList.add(hiddenClass);
        blackout.classList.add('blackout--none');
      });
    }
  };

  openPopup('town--hidden', 'town--visible', townOpenButton, modalTown);
  openPopup(
      'question--hidden',
      'question--visible',
      questionOpenButton,
      modalQuestion
  );

  openPopup(
      'question--hidden',
      'question--visible',
      questionOpenButtonMobile,
      modalQuestion
  );

  closePopup('town--hidden', 'town--visible', townCloseButton, modalTown);
  closePopup(
      'question--hidden',
      'question--visible',
      questionCloseButton,
      modalQuestion
  );

  var closePopupWithEsc = function (hiddenClass, visibleClass, popup) {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains(visibleClass)) {
          popup.classList.remove(visibleClass);
          popup.classList.add(hiddenClass);
          blackout.classList.add('blackout--none');
        }
      }
    });
  };

  closePopupWithEsc('town--hidden', 'town--visible', modalTown);
  closePopupWithEsc('question--hidden', 'question--visible', modalQuestion);

  blackout.addEventListener('click', function () {
    blackout.classList.add('blackout--none');

    if (modalTown.classList.contains('town--visible')) {
      modalTown.classList.remove('town--visible');
      modalTown.classList.add('town--hidden');
    } else if (modalQuestion.classList.contains('question--visible')) {
      modalQuestion.classList.remove('question--visible');
      modalQuestion.classList.add('question--hidden');
    }
  });

  var inputName = modalQuestion.querySelector('.js-input-name');
  var inputMail = modalQuestion.querySelector('.js-input-mail');
  var errorMail = modalQuestion.querySelector('.form__mail-error');

  var nameInputTitle = modalQuestion.querySelector('.form__input-name-title');
  var emailInputTitle = modalQuestion.querySelector('.form__input-email-title');

  inputMail.onblur = function () {
    emailInputTitle.classList.add('form__input-name-title--visible');

    var regEx =
      '/^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/';
    var validEmail = regEx.test(inputMail);

    if (!validEmail) {
      inputMail.classList.add('form__error');
      errorMail.innerHTML = 'Введён некорректный e-mail, попробуйте заново';
    } else {
      inputMail.classList.add('form__valid');
    }
  };

  inputMail.onfocus = function () {
    if (this.classList.contains('form__error')) {
      this.classList.remove('form__error');
      errorMail.innerHTML = '';
      emailInputTitle.classList.remove('form__input-name-title--visible');
    }
  };

  inputName.onblur = function () {
    nameInputTitle.classList.add('form__input-name-title--visible');
  };

  var checkboxForm = modalQuestion.querySelector('.js-form-checkbox');
  var sendButton = modalQuestion.querySelector('.js-form-send');

  checkboxForm.addEventListener('change', function () {
    if (checkboxForm.checked) {
      sendButton.removeAttribute('disabled');
    } else {
      sendButton.setAttribute('disabled');
    }
  });
})();
