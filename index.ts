import Game from './src/Game';
import { load } from './src/Script/load-script';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

if (process.env.NODE_ENV === 'production') {
    const startGameButton = document.getElementById('startGameButton');
    startGameButton.addEventListener('click', () => {
        const game = new Game(canvas);
        load(canvas).then((loader) => {
            document.getElementById('intro').remove();
            game.run(loader.tree(), 'index');
        });
    });
} else {
    document.getElementById('intro').remove();
    const game = new Game(canvas);
    // Démarrer la boucle de jeu
    load(canvas).then((loader) => {
        game.run(loader.tree(), 'index');
    });
}




