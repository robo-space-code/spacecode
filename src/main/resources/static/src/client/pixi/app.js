import * as PIXI from 'pixi.js';
import { renderBackground, makestar } from './background/background';
import { playground } from './playground/playground';
import renderPlayer from './player/player';
import renderMeteor from './meteor/meteor';
import { getCurrentState } from '../state';

export function pixiApp() {
  const app = new PIXI.Application({ resizeTo: window });
  document.body.appendChild(app.view);
  makestar(app);
  const playgroundApp = playground();


  app.ticker.add((delta) => {

    const { me, meteors } = getCurrentState();

    renderBackground(app, delta);

    if(me){

      renderPlayer(me, me, playgroundApp);
      meteors.forEach((meteor) => renderMeteor(me, meteor, playgroundApp));
    
    }
  });

}

export default pixiApp;
