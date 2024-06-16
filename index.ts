import Game from './src/Game';
import { load } from './src/Script/load-script';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const game = new Game(canvas);


load(canvas).then((loader) => {
    game.run(loader.tree(), 'index');
});
