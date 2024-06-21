import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans un embranchement');

    LabyrinthBuilder.build(scene, game)
        .link('lab-un').from('e')
            .choice('Aller à droite', 'e')
            .choice('Revenir sur mes pas', 'n')
            .choice('tout droit', 's')

        .link('hogwarts-e')
            .choice('Revenir en arrière', 'e')
            .choice('Aller à droite', 's')
            .choice('Aller à gauche', 'n')

        .link('lab-2').from('e')
            .choice('Repartir en arrière', 's')
            .choice('Aller à gauche', 'e')
            .choice('Continuer tout droit', 'n')
        ;
};
