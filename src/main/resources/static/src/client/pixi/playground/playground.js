export function playground() {

    const canvasElement = document.getElementById('game-canvas');
   
    const playgroundApp = new PIXI.Application({ 
        view: canvasElement,
        width: 1000, 
        height: 1000,
        antialias: true,
        transparent: true
    });
    
    playgroundApp.view.style.position = "absolute";
    playgroundApp.view.style.top = "50%";
    playgroundApp.view.style.left = "5%";
    playgroundApp.view.style.transform = "translateY(-50%)";
    playgroundApp.view.style.border = "2px solid gray";

    document.body.appendChild(playgroundApp.view);

    return playgroundApp;

}

export default playground;
