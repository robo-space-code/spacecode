import { getAsset } from '../../assets';

const Constants = require('../../../shared/constants');
const { PLAYER_RADIUS } = Constants;

const canvas = document.getElementById('game-canvas');

// 주어진 좌표에서 배를 그리는 함수
function renderPlayer(me, player, app) {

    // document.body.appendChild(app.view);

    const { x, y, direction,username } = player;
    const canvasX = app.screen.width / 2 + x - me.x;
    const canvasY = app.screen.height / 2 + y - me.y;

    // 배 그리기
    const sprite = new PIXI.Sprite(PIXI.Texture.from(getAsset('ship.svg')));
    sprite.anchor.set(0.5); // Set the anchor point to the center
    sprite.x = canvasX;
    sprite.y = canvasY;
    sprite.rotation = direction;
    sprite.width = PLAYER_RADIUS * 2;
    sprite.height = PLAYER_RADIUS * 2;
    app.stage.addChild(sprite);

    // 텍스트 그리기
    const text = new PIXI.Text(username, { fontFamily: 'Arial', fontSize: 20, fill: 'white' });
    text.anchor.set(0.5);
    text.x = canvasX;
    text.y = canvasY + PLAYER_RADIUS + 20;
    app.stage.addChild(text);
}

export default renderPlayer;