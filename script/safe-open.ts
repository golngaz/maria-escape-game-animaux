import img from '../assets/img/safe-open.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Coffre-fort');

    scene.dialog("J'ai failli douter de vous, mon enfant...\n\n*Le coffre-fort s'ouvre sous vos yeux, vous êtes un génie !*\n\nVous pouvez désormais déposer votre argent");

    const value = game.var('deposit');
    if (value === null) {
        game.var('deposit', []);
    }

    if (game.var('purse') !== true) {
        scene.choice('Déposer la bourse').onClick(() => {
            game.var('purse', true);
        }).link('safe-open');
    } else {
        scene.choice('Reprendre la bourse').onClick(() => {
            game.var('purse', false);
        }).link('safe-open');
    }

    if (game.var('piece') !== true) {
        scene.choice('Déposer la pièce').onClick(() => {
            game.var('piece', true);
        }).link('safe-open');
    } else {
        scene.choice('Reprendre la pièce').onClick(() => {
            game.var('piece', false);
        }).link('safe-open');
    }

    scene.choice('*Dabber*').link('dab-easter');

    scene.choice('Partir de la banque').link('index').onClick(() => {
        if (game.var('purse') === true && game.var('piece') === true) {
            game.score += 2;
        }

        game.var('bank-completed', true);
    });
};

