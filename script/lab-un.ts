import img from '../assets/img/hogwarts-dungeon.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Il y a deux portes');

    if (game.var('lab-from') === 'e') {
        scene.choice('Porte en face').link('lab-8').onClick(() => game.var('lab-from', 'e'));;
        scene.choice('Porte de gauche').link('lab-4');
    } else if(game.var('lab-from') === 's') {
        scene.choice('Porte à gauche').link('lab-8').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Couloir à droite').link('lab-u').onClick(() => game.var('lab-from', 'n'));
        scene.choice('Repartir en arrière').link('lab-4');
    }
    
};
