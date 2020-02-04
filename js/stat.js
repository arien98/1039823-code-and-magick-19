'use strict';

// параметры облака
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_MARGIN = 20;
var SHADOW_OFFSET = 10;

// параметры текста
var LINE_HEIGHT = 25;
var TITLE_FONT = '16px PT Mono';
var TITLE_COLOR = '#000';
var TITLE_TEXT = 'Ура вы победили!';
var TITLE_MSG = 'Список результатов:';

// параметры блока
var BLOCK_HEIGHT = -150;
var BLOCK_WIDTH = 40;
var BLOCK_X = CLOUD_X + 60;
var BLOCK_Y = 240;
var BLOCK_GAP = 50;
var BLOCK_OFFSET = BLOCK_WIDTH + BLOCK_GAP;

// параметры цвета
var white = '#fff';
var shadowColor = 'rgba(0, 0, 0, 0.7)';
var blockColor = 'rgba(255, 0, 0, 1)';


var drawCloud = function (ctx) {
  ctx.fillStyle = white;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var drawShadow = function (ctx) {
  ctx.fillStyle = shadowColor;
  ctx.fillRect(CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloud = function (ctx) {
  drawShadow(ctx);
  drawCloud(ctx);
};

var renderTitle = function (ctx) {
  ctx.font = TITLE_FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = TITLE_COLOR;
  ctx.fillText(TITLE_TEXT, 130, 60);
  ctx.fillText(TITLE_MSG, 130, 40);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  var str1 = 'hsl(250, ';
  var str2 = Math.floor(Math.random() * (100 - 30)) + 30;
  var str3 = '%, 50%)';
  return str1 + str2 + str3;
};

var renderBar = function (ctx, times, names) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = getRandomColor();
    if (names[i] === 'Вы') {
      ctx.fillStyle = blockColor;
    }
    ctx.fillRect(BLOCK_X + BLOCK_OFFSET * i, BLOCK_Y, BLOCK_WIDTH, BLOCK_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = TITLE_COLOR;
    ctx.fillText(names[i], BLOCK_X + BLOCK_OFFSET * i, BLOCK_Y + 10, BLOCK_OFFSET);
  }
};

window.renderStatistics = function (ctx, names, times) {
  console.log(names);
  renderCloud(ctx);
  renderTitle(ctx);
  renderBar(ctx, times, names);


};
