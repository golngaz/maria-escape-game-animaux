import img from '../assets/img/watchmaker.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chez le maître du temps');

    if (game.var('angry-watchmaker') !== true) {
        scene.dialog('Il est 16h moins le quart, mais êtes-vous \nvraiment entré dans ma boutique uniquement\npour savoir l\'heure ??');
    } else {
        scene.dialog('ENCORE ?!\n\nIL EST 16H MOINS LE QUART !!!');
    }

    scene.choice('Oui merci, au revoir !').link('index').onClick(() => {
        game.var('angry-watchmaker', true);
    });
    scene.choice("Oui, mais j'aurais une autre demande à vous faire").link('watchmaker');

    scene.onDisplay(() => {
        game.var('watchmaker-asked', true);
    })
};
