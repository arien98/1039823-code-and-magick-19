'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SERNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var ESCAPE_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var popup = document.querySelector('.setup');
var popupSimilarWizards = document.querySelector('.setup-similar');
var openPopupButton = document.querySelector('.setup-open');
var closePopupButton = popup.querySelector('.setup-close');
var wizardNameInput = document.querySelector('input[name="username"]');

var utils = {
  isEscEvent: function (evt, action) {
    if (evt.key === ESCAPE_KEY) {
      action();
    }
  },
  isEnterEvent: function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  }
};

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var showPopup = function () {
  popup.classList.remove('hidden');
  popupSimilarWizards.classList.remove('hidden');
  document.addEventListener('keydown', popupEscapePressHandler);
};

var closePopup = function () {
  popup.classList.add('hidden');
  popupSimilarWizards.classList.add('hidden');
  document.removeEventListener('keydown', popupEscapePressHandler);
};

var createWizard = function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SERNAMES);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(WIZARD_COAT_COLORS);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(WIZARD_EYES_COLORS);
  return wizardElement;
};

var renderWizard = function () {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(createWizard());
  }
  similarListElement.appendChild(fragment);
};

var colorizeWizardElements = function () {
  var wizard = document.querySelector('.setup-player');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardFireball = wizard.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = wizard.querySelector('input[name="coat-color"]');
  var wizardEyesInput = wizard.querySelector('input[name="eyes-color"]');
  var wizardFireballInput = wizard.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var color = getRandomElement(WIZARD_COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = getRandomElement(WIZARD_EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  });

  wizardFireball.addEventListener('click', function () {
    var color = getRandomElement(FIREBALL_COLORS);
    wizardFireball.style.background = color;
    wizardFireballInput.value = color;
  });
};

var popupEscapePressHandler = function (evt) {
  utils.isEscEvent(evt, closePopup);
};

openPopupButton.addEventListener('click', showPopup);

wizardNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', popupEscapePressHandler);
});

wizardNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', popupEscapePressHandler);
});

openPopupButton.addEventListener('keydown', function (evt) {
  utils.isEnterEvent(evt, showPopup);
});

closePopupButton.addEventListener('click', closePopup);

closePopupButton.addEventListener('keydown', function (evt) {
  utils.isEnterEvent(evt, closePopup);
});

renderWizard();
colorizeWizardElements();
