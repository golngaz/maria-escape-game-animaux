import img from '../assets/img/hogwarts-dungeon.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans une pièce avec deux portes');

    if (game.var('lab-from') === 'o') {
        scene.choice('Prochaine porte').link('lab-u').onClick(() => game.var('lab-from', 's'));
        scene.choice('Repartir en arrière').link('lab-23').onClick(() => game.var('lab-from', 'e'));
    } else {
        scene.choice('Prochaine porte').link('lab-23').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Repartir en arrière').link('lab-u').onClick(() => game.var('lab-from', 's'));
    }
};
