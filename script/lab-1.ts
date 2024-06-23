import img from '../assets/img/labo.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Salle de cours de potions magiques');
    scene.dialog("Vous êtes arrivé dans la salle de cours de potions \n\nIl n'y a personne, mais une chouette vous observe...");

    scene.choice('Fouiller').link('potion-sound')
    scene.choice('Sortir').link('potion-sound')
};
