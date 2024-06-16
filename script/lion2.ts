import lionImg from '../assets/img/lion.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.name('Agrou 2');
    scene.img(lionImg);

    scene.choice('LION 2').link('canard');
    scene.choice('Choix pas canard').link('index');

    if (game.var('lion-saw') === true) {
        scene.choice('CHOIX BONUSSSSS');
    }
};
