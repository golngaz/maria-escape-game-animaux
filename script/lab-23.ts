import img from '../assets/img/hogwarts-dungeon.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une pièce avec trois portes');

    if (game.var('lab-from') === 'n') {
        scene.choice('Porte à ma droite').link('lab-r');
        scene.choice('Porte à gauche').link('lab-8');
        scene.choice('Repartir en arrière').link('lab-2').onClick(() => game.var('lab-from', 's'));
    } else if (game.var('lab-from') === 'e') {
        scene.choice('Porte en face à gauche').link('lab-r').onClick(() => game.var('lab-from', 's'));
        scene.choice('Porte immédiatement à droite').link('lab-22').onClick(() => game.var('lab-from', 's'));
        scene.choice('Repartir en arrière').link('lab-2').onClick('lab-from', 'o');
    }
};
