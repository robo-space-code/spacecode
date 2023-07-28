import { getAsset } from '../../assets';

const Constants = require('../../../shared/constants');
const { PLAYER_RADIUS } = Constants;

const canvas = document.getElementById('game-canvas');

let sprite = null;
let text = null;

function renderPlayer(me, player, app) {
    const { x, y, direction, username } = player;
    const canvasX = app.screen.width / 2 + x - me.x;
    const canvasY = app.screen.height / 2 + y - me.y;

    // 이전 프레임에서 추가한 배와 텍스트를 삭제
    if (sprite) {
        app.stage.removeChild(sprite);
    }
    if (text) {
        app.stage.removeChild(text);
    }

    // 배 그리기
    sprite = new PIXI.Sprite(PIXI.Texture.from(getAsset('ship.svg')));
    sprite.anchor.set(0.5);
    sprite.x = canvasX;
    sprite.y = canvasY;
    sprite.rotation = direction;
    sprite.width = PLAYER_RADIUS * 2;
    sprite.height = PLAYER_RADIUS * 2;
    app.stage.addChild(sprite);

    // 텍스트 그리기
    text = new PIXI.Text(username, { fontFamily: 'Arial', fontSize: 20, fill: 'white' });
    text.anchor.set(0.5);
    text.x = canvasX;
    text.y = canvasY + PLAYER_RADIUS + 20;
    app.stage.addChild(text);
}

export default renderPlayer;