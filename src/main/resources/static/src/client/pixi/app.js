import * as PIXI from 'pixi.js';
import { renderBackground, makestar } from './background/background';
import { playground } from './playground/playground';

export function pixiApp() {
  const app = new PIXI.Application({ resizeTo: window });
  document.body.appendChild(app.view);

  makestar(app);
  // playground();

  app.ticker.add((delta) => {
    renderBackground(app, delta);
    playground();
  });

  

}

export default pixiApp;
