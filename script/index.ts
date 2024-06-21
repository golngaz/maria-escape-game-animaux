import img from '../assets/img/chemin_de_traverse.webp';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chemin de traverse');
    scene.dialog('Sur le chemin de traverse, où comptez-vous vous rendre pour\n votre prochaine destination ?');

    if (game.var('watchmaker-completed') !== true) {
        if (game.var('angry-watchmaker') === true) {
            scene.choice('Maître du temps ( énervé )').link('watchmaker');
        } else {
            scene.choice('Maître du temps').link('watchmaker');
        }
    }

    if (game.var('bank-completed') !== true) {
        scene.choice('Banque des Sorciers').link('bank');
    }

    if (game.var('watchmaker-completed') === true && game.var('bank-completed') === true) {
        scene.choice('Poudlard').link('hogwarts');
    } else if (game.var('try-hogwarts-too-far') !== true) {
        scene.choice('Poudlard').link('hogwarts-too-far');
    }
};
