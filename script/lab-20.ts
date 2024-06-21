import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');

    if (game.var('lab-20-closed') === null) {
        scene.dialog('Vous êtes dans une pièce avec une seule porte');
    } else {
        scene.dialog('La porte est fermée à clef !');
    }

    scene.choice('Repartir en arrière').link('lab-r').onClick(() => game.var('lab-from', 'o'));

    if (game.var('lab-20-closed') === null) {
        scene.choice('Ouvrir la porte').link('lab-20').onClick(() => game.var('lab-20-closed', true));
    }
};
