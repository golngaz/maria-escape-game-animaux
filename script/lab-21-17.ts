import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans un embranchement');

    LabyrinthBuilder.build(scene, game)
        .link('lab-21').from('e')
            .choice('Repartir en arrière', 'o')
            .choice('Aller à gauche', 's')
            .choice('Aller à droite', 'n')

        .link('lab-34').from('s')
            .choice('Repartir en arrière', 'n')
            .choice('Continuer tout droit', 's')
            .choice('Tourner à gauche', 'o')

        .link('lab-17').from('n')
            .choice('Aller tout droit', 'n')
            .choice('Aller à droite', 'o')
            .choice('Repartir en arrière', 's')
        ;
};
