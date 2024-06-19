import img from '../assets/img/hogwarts-dungeon.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes entré dans une pièce circulaire avec deux portes');

    if (game.var('lab-from') === 'n') {
        scene.choice('Porte en face').link('lab-23');
        scene.choice('Repartir en arrière').link('lab-8');
    } else {
        scene.choice('Porte en face').link('lab-8');
        scene.choice('Repartir en arrière').link('lab-23');
    }
};
