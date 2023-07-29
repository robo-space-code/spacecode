import { getAsset } from '../../assets';
const Constants = require('../../../shared/constants');
const { METEOR_RADIUS } = Constants;

let sprite = null;
let text = null;

// 주어진 좌표에서 운석을 그리는 함수
function renderMeteor(me, meteor, app) {
    const { direction, word, x, y } = meteor;

    const canvasX = app.screen.width / 2 + x - me.x;
    const canvasY = app.screen.height / 2 + y - me.y;

    if (sprite && app.stage.children.includes(sprite)) {
        app.stage.removeChild(sprite);
    }
    if (text && app.stage.children.includes(text)) {
        app.stage.removeChild(text);
    }

    // 운석 그리기
    sprite = new PIXI.Sprite(PIXI.Texture.from(getAsset('meteor.png')));
    sprite.anchor.set(0.5); // Set the anchor point to the center
    sprite.x = canvasX;
    sprite.y = canvasY;
    sprite.width = METEOR_RADIUS * 2;
    sprite.height = METEOR_RADIUS * 2;
    app.stage.addChild(sprite);

    // 텍스트 그리기
    text = new PIXI.Text(word, { fontFamily: 'Arial', fontSize: 20, fill: 'white' });  // `let` 키워드 제거
    text.anchor.set(0.5);
    text.x = canvasX;
    text.y = canvasY + METEOR_RADIUS + 20;
    app.stage.addChild(text);
}

export default renderMeteor;
