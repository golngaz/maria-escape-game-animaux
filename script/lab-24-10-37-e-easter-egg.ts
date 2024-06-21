import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('J\'ai appelé cette salle "lab-24-10-37-e-easter-egg"\ndonc tu te doutes que je ne finirai pas ce\nLabyrinthe dessuite hein');

    scene.choice('Repartir en arrière').link('lab-37').onClick(() => game.var('lab-from', 'o'));
    scene.choice('Téléportation à l\'entrée Nord (Pénalité)').link('hogwarts-n').onClick(() => game.score -= 2);
};
