import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans un embranchement');

    LabyrinthBuilder.build(scene, game)
        .link('lab-r').from('n')
            .choice('Repartir en arrière', 'e')
            .choice('Porte au fond à droite', 's')
            .choice('Aller à gauche', 'n')

        .link('hogwarts-n').from('s')
            .choice('Repartir en arrière', 'n')
            .choice('Porte au fond à droite', 'e')
            .choice('Aller tout droit', 's')

        .link('lab-14').from('n')
            .choice('Aller à gauche', 'e')
            .choice('Repartir en arrière', 's')
            .choice('Continuer tout droit', 'n')
        ;
};
