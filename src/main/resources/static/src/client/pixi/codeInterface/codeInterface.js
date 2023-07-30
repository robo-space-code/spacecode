export function codeInterface() {

    const canvasElement = document.getElementById('game-canvas');

    const playgroundApp = new PIXI.Application({
        view: canvasElement,
<<<<<<< HEAD
        width: 1000,
=======
        width: 600, 
>>>>>>> f0b5ed6487307b08958b6ffb2d656bcdca4f7df5
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
