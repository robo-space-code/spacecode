export function codeInterface() {

    const canvasElement = document.getElementById('game-canvas');

    const playgroundApp = new PIXI.Application({ 
        view: canvasElement,
        width: 600, 
        height: 1000,
        antialias: true,
        transparent: true
    });
    playgroundApp.view.style.position = "absolute";
    playgroundApp.view.style.top = "50%";
    playgroundApp.view.style.right = "5%";
    playgroundApp.view.style.transform = "translateY(-50%)";
    playgroundApp.view.style.border = "2px solid gray";

    document.body.appendChild(playgroundApp.view);
}

export default codeInterface;
