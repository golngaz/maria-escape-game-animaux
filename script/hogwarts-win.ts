import img from '../assets/img/hogwarts.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard');
    scene.dialog("Vous contemplez une dernière fois l'école, \navant de repartir pour New-York\n\nCrédits : \n\nMme Chouaouta Maria - Conception / Mise en place finale \nM Alcantud Gaël - Développeur");

    scene.choice("Merci d'avoir joué").link('hogwarts-win');
    scene.choice("Votre score est de " + game.score + '/14, Félicitations').link('hogwarts-win');

    if (game.score >= 14) {
        scene.choice('*Dabber*').link('super-dab');
    }
};
