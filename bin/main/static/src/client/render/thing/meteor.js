import { getAsset } from '../../assets';
import maptrick from '../background/maptrick';
const Constants = require('../../../shared/constants');
const { METEOR_RADIUS } = Constants;

// Get the canvas graphics context
const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

// 주어진 좌표에서 운석을 그리는 함수
function renderMeteor(me, meteor) {
    
    const { direction, word , invisible } = meteor;
    
    const { rx , ry } = maptrick(me, meteor);  

    const canvasX = canvas.width / 2 + rx - me.x;
    const canvasY = canvas.height / 2 + ry - me.y;
    /* console.log(`X : ${canvasX}`);
    console.log(`Y : ${canvasY}`); */
    // 운석 그리기
    context.save();
    context.translate(canvasX, canvasY);
    context.rotate(direction);
    const meteorImage = invisible ? getAsset(`meteorv.png`) : getAsset(`meteor.png`) ;
    context.drawImage(
        meteorImage,
        -METEOR_RADIUS,
        -METEOR_RADIUS,
        METEOR_RADIUS * 2,
        METEOR_RADIUS * 2,
    );
    context.restore();

    context.fillStyle = 'white'; // 텍스트 색상 설정
    context.font = '20px Arial'; // 텍스트 폰트 설정
    context.textAlign = 'center'; // 텍스트 정렬 설정
    context.fillText(word, canvasX, canvasY + METEOR_RADIUS + 20); // 텍스트 그리기
}

export default renderMeteor;