import * as PIXI from 'pixi.js';
import { renderBackground, makestar } from './background/background';
import { playground } from './playground/playground';
import renderPlayer from './player/player';
import { getCurrentState } from '../state';

export function pixiApp() {
  const app = new PIXI.Application({ resizeTo: window });
  document.body.appendChild(app.view);

  makestar(app);
  const playgroundApp = playground();

  app.ticker.add((delta) => {
    renderBackground(app, delta);
    const { me } = getCurrentState();
    if(me){
      renderPlayer(me, me, playgroundApp);
    }
  });

}

export default pixiApp;
