import img from '../assets/img/watchmaker.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chez le maître du temps');

    scene.dialog('J\'ai vraiment beaucoup de travail, mais vous semblez pressé.\nJe vous donne donc un sort pour réparer votre montre :\n\n"Chronos reparo"');

    scene.choice('Chronos reparo').link('watchmaker-reparo');
    scene.choice('Chrinis ripariiiii').link('watchmaker-wtf');
};
