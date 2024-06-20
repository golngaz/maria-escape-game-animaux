import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans un embranchement');

    LabyrinthBuilder.build(scene, game)
        .link('lab-25').from('e')
            .choice('Aller à gauche', 'o')
            .choice('Aller tout droit', 's')
            .choice('Repartir en arrière', 'n')

        .link('lab-12').from('o')
            .choice('Aller à gauche', 's')
            .choice('Repartir en arrière', 'o')
            .choice('Aller à droite', 'n')

        .link('lab-36').from('e')
            .choice('Aller tout droit', 'n')
            .choice('Aller à droite', 'o')
            .choice('Repartir en arrière', 's')
        ;
};
