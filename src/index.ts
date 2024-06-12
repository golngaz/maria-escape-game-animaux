import Game from './Game';
import { load } from '../script/loads';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const game = new Game(canvas);

game.run(load(canvas).tree(), 'index');
