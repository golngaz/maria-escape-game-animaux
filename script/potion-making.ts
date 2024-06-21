import img from '../assets/img/labo-book.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labo de Chimie');
    scene.dialog('Vous ouvrez le livre de recettes');

    scene.choice('Page 1').link('potion-making-proud');
    scene.choice('Page 8').link('potion-making-wisdom');
    scene.choice('Page 36').link('potion-making-peace');
    scene.choice('Lancer le sort *Revelio*').link('potion-making-revelio')
};
