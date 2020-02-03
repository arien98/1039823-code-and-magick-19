'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var SHADOW_MOVING = 10;
var CLOUD_MARGIN = 20;
var LINE_HEIGHT = 25;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeight = [];
var FONT = '16px PT Mono';
var renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var renderBar = function (ctx, color, x, y, h) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BAR_WIDTH, h);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', CLOUD_X + SHADOW_MOVING, CLOUD_Y + SHADOW_MOVING);
  renderCloud(ctx, '#fff', CLOUD_X, CLOUD_Y);

  ctx.font = FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_MARGIN, CLOUD_Y + CLOUD_MARGIN);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_MARGIN, CLOUD_Y + CLOUD_MARGIN + LINE_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    barHeight[i] = times[i] / maxTime * BAR_MAX_HEIGHT;
    if (names[i] === 'Вы') {
      var barColor = 'rgba(255, 0, 0, 1)';
    } else {
      barColor = 'hsl(250, Math.random() * 100%, 50%)';
    }
    renderBar(ctx, barColor, CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + CLOUD_MARGIN, CLOUD_Y + CLOUD_MARGIN + LINE_HEIGHT * 2 + (BAR_MAX_HEIGHT - barHeight[i]), barHeight[i]);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + CLOUD_MARGIN, CLOUD_Y + CLOUD_MARGIN + LINE_HEIGHT * 2 + BAR_MAX_HEIGHT + BAR_GAP / 2);
  }
};
