import img from '../assets/img/watchmaker.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chez le maître du temps');

    scene.dialog('?????');

    scene.choice('Non rien je rigole... "Chronos Reparo" !').link('watchmaker-reparo');
};
