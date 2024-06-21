import img from '../assets/img/labo.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labo de Chimie');
    scene.dialog("Vous êtes arrivé dans le labo la salle de cours de potions \n\nIl n'y a personne...");

    scene.choice('Fouiller').link('potion-sound')
    scene.choice('Sortir').link('potion-sound')
};
