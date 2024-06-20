import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes entré dans une pièce circulaire avec deux portes');

    LabyrinthBuilder.build(scene, game)
        .link('lab-8').from('s')
            .choice('Aller tout droit', 's')
            .choice('Repartir en arrière', 'n')

        .link('lab-23').from('n')
            .choice('Aller tout droit', 'n')
            .choice('Repartir en arrière', 's')
    ;
};
