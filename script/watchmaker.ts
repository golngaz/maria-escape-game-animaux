import img from '../assets/img/watchmaker.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chez le maître du temps');

    if (game.var('watchmaker-asked') === true) {
        let dialog = 'Vous encore, que puis-je faire pour vous ?';

        if (game.var('angry-watchmaker') === true) {
            dialog += "\n\n... Vous allez encore me DEMANDER L'HEURE ???";
        }
        scene.dialog(dialog);
    } else {
        scene.dialog('Bonjour, et soyez la bienvenue chez le meilleur horloger\n du chemin de traverse.\nQue puis-je faire pour vous ?');
    }

    scene.choice('Quelle heure est-il ?').link('watchmaker-ask-hour');
    scene.choice('Je souhaiterais réparer ma montre à gousset').link('watchmaker-ask-repair');
    scene.choice('Rien du tout, au revoir').link('index');
};
