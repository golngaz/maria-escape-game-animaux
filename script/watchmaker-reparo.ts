import img from '../assets/img/watchmaker.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chez le maître du temps');

    if (game.var('reparo-error') === true) {
        scene.dialog('Rien ne se passe...');
    } else {
        scene.dialog("*Une sensation magique entoure la pièce, \net la montre se met à trembler*\n\nTrès bien, maintenant, prononcez depuis \ncombien de temps elle est cassée");
    }

    scene.choice('Il y a 6h25 minutes').onClick(() => game.score += 2).link('watchmaker-repaired');
    scene.choice('Il y a 6h35 minutes').onClick(() => game.score-- && game.var('reparo-error', true)).link('watchmaker-reparo');
    scene.choice('Il y a 6h45 minutes').onClick(() => game.score-- && game.var('reparo-error', true)).link('watchmaker-reparo');
    scene.choice('Mais... Quelle heure est-il ?').link('watchmaker-reparo-which-hour').onClick(() => game.var('reparo-error', false));
};
