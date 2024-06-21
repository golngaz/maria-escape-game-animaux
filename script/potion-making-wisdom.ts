import img from '../assets/img/labo-book.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labo de Chimie');
    scene.dialog('Recette pour la potion "Brouet de Paix"\n\n* 1 plume de Phoenix\n* 4 écailles de dragon\n* 5 gouttes de jus de mandragore');

    scene.choice('Revenir au sommaire').link('potion-making');
};
