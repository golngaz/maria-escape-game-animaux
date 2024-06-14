import Game from './src/Game';
import { load } from './src/Script/load-script';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const game = new Game(canvas);

game.run(load(canvas).tree(), 'index');
