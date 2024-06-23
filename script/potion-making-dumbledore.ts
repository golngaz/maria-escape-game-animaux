import img from '../assets/img/labo-dumbledore.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Salle de cours de potions magiques');
    scene.dialog("Bonjour, mon enfant, je vois que vous avez\n bien progressé\n\nIl se trouve que votre sort revelio m'a, moi aussi,\nrévélé !");

    scene.choice("Je vous avais vu sous forme de chouette, vous ne m'avez vraiment pas dupé !").link('potion-making-dumbledore2');
    scene.choice("Ah ! Et bien c'est un heureux hasard !").link('potion-making-dumbledore2');
};
