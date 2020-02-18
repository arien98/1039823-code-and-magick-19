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

var ESCAPE_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var openSetupButton = document.querySelector('.setup-open');
var closeSetupButton = document.querySelector('.setup-close');
var wizard = document.querySelector('.setup-player');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var wizardFireball = wizard.querySelector('.setup-fireball-wrap');
var wizardCoatInput = wizard.querySelector('input[name="coat-color"]');
var wizardEyesInput = wizard.querySelector('input[name="eyes-color"]');
var wizardFireballInput = wizard.querySelector('input[name="fireball-color"]');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var showSetup = function () {
  document.querySelector('.setup').classList.remove('hidden');
};

var closeSetup = function () {
  document.querySelector('.setup').classList.add('hidden');
};

var showPopup = function () {
  showSetup();
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var closePopup = function () {
  closeSetup();
  document.querySelector('.setup-similar').classList.add('hidden');
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

var changeColor = function (element, elementInput, style) {
  element.addEventListener('click', function () {
    var color = getRandomElement(style);
    console.log(color);
    element.style.fill = color;
    elementInput.value = color;
  });
};

var changeFireballColor = function () {
  wizardFireball.addEventListener('click', function () {
    var color = getRandomElement(FIREBALL_COLOR);
    console.log(color);
    wizardFireball.style.background = color;
    wizardFireballInput.value = color;
  });
};

renderWizard();

openSetupButton.addEventListener('click', function () {
  showSetup();

  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESCAPE_KEY) {
      closePopup();
    }
  });
});

openSetupButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    showSetup();
  }
});

closeSetupButton.addEventListener('click', function () {
  closeSetup();
});

closeSetupButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeSetup();
  }
});


changeColor(wizardCoat, wizardCoatInput, WIZARD_COAT_COLOR);
changeColor(wizardEyes, wizardEyesInput, WIZARD_EYES_COLOR);
changeFireballColor();
