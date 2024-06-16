import Game from './src/Game';
import { load } from './src/Script/load-script';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const startGameButton = document.getElementById('startGameButton');
startGameButton.addEventListener('click', () => {
    // Masquer le bouton de démarrage
    startGameButton.style.display = 'none';

    const game = new Game(canvas);
    // Démarrer la boucle de jeu
    load(canvas).then((loader) => {
        game.run(loader.tree(), 'index');
    });
});
