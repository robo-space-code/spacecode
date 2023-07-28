import { getAsset } from '../../assets';
import maptrick from '../background/maptrick';

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const Constants = require('../../../shared/constants');
const { BULLET_RADIUS } = Constants;

function renderBullet(me, bullet) {
    const { rx , ry } = maptrick(me, bullet);  
    const { direction } = bullet

    const canvasX = canvas.width / 2 + rx - me.x;
    const canvasY = canvas.height / 2 + ry - me.y;
    context.save();
    context.translate(canvasX, canvasY);
    context.rotate(direction);
    context.drawImage(
        getAsset('missile.svg'),
        - BULLET_RADIUS,
        - BULLET_RADIUS,
        BULLET_RADIUS * 2,
        BULLET_RADIUS * 2,
    );
    context.restore();
}

export default renderBullet;