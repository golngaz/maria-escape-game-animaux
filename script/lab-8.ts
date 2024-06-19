import img from '../assets/img/hogwarts-dungeon.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une pièce avec deux portes, une fenêtre');

    scene.choice('Porte près de la fenêtre').link('lab-22').onClick(() => game.var('lab-from', 'n'));
    scene.choice('Passer par la fenêtre').link('lab-22').onClick(() => game.var('lab-from', 'n'));
    scene.choice('Autre porte').link('lab-un');
};
