const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const Constants = require('../../shared/constants');

const { MAP_SIZE } = Constants;

function renderLine(me) {

    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.strokeRect(canvas.width / 2 - me.x, canvas.height / 2 - me.y, MAP_SIZE, MAP_SIZE);
  
}

export default renderLine;
