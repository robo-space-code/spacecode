import { getAsset } from '../../assets';
import { getCurrentState } from '../../state';

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const Constants = require('../../../shared/constants');
const { MAP_SIZE } = Constants;

// 배경을 그리는 역할, 그라데이션
function renderBackground(x, y) {

    context.clearRect(0, 0, canvas.width, canvas.height);


    // Draw grid or any other background elements that should move with the camera
    /* context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    */
    const gridSize = 40;
    context.strokeStyle = 'white';
    context.lineWidth = 0.1;
    
    const offsetX = -x % gridSize;
    const offsetY = -y % gridSize;

    for (let x = offsetX; x < canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
    }

    for (let y = offsetY; y < canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
    }

}

export default renderBackground;