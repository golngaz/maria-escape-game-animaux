import img from '../assets/img/hogwarts-dungeon.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans un embranchement');

    LabyrinthBuilder.build(scene, game)
        .link('lab-un').from('e')
            .choice('Repartir en arrière', 'e')
            .choice('Revenir sur mes pas', 'n')
            .choice('Tour droit', 's')

        .link('hogwarts')
            .choice('Revenir en arrière', 'e')
            .choice('Aller à droite', 's')
            .choice('Aller à gauche', 'n')

        .link('lab-2').from('e')
            .choice('Repartir en arrière', 's')
            .choice('Aller à gauche', 'e')
            .choice('Continuer tout droit', 'n')
        ;


    if (game.var('lab-from') === 'e') {
        scene.choice('Droite').link('lab-un').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Gauche').link('lab-2').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Repartir en arrière').link('hogwarts');
    
    } else if (game.var('lab-from') === 'n') {
        scene.choice('Tout droit').link('lab-2').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Revenir sur mes pas').link('lab-un').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Gauche').link('hogwarts')
    
    } else if (game.var('lab-from') === 's') {
        scene.choice('Revenir sur mes pas').link('lab-2').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Tour droit').link('lab-un').onClick(() => game.var('lab-from', 'e'));
        scene.choice('Droite').link('hogwarts');
    }
    
};
