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
var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var showPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var createWizard = function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SERNAMES);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(WIZARD_COAT_COLOR);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(WIZARD_EYES_COLOR);
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

renderWizard();
showPopup();
