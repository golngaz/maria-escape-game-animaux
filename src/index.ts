import script from './script.json';
import Loader from './Loader';
import Game from './Game';

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

const game = new Game(canvas);

const loader = new Loader(script, canvas);

game.run(loader.tree(), 'init');
