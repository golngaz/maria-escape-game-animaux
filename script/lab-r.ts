import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans un embranchement');

    LabyrinthBuilder.build(scene, game)
        .link('lab-20').from('e')
            .choice('Aller à gauche', 's')
            .choice('Aller à droite', 'n')
            .choice('Repartir en arrière', 'o')

        .link('lab-23').from('o')
            .choice('Aller tout droit', 'n')
            .choice('Repartir en arrière', 's')
            .choice('Aller à droite', 'o')

        .link('lab-28').from('e')
            .choice('Aller tout droit', 's')
            .choice('Aller à gauche', 'o')
            .choice('Repartir en arrière', 'n')
        ;
};
