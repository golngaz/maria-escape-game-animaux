import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Il y a deux portes');

    LabyrinthBuilder.build(scene, game)
        .link('lab-8').from('e')
            .choice('Porte en face', 'e')
            .choice('Revenir en arrière', 'o')
            .choice('Aller à gauche', 's')

        .link('lab-4').from('n')
            .choice('Porte à gauche', 'e')
            .choice('Aller à droite', 'o')
            .choice('Repartir en arrière', 's')

        .link('lab-u').from('n')
            .choice('Aller en face', 'o')
            .choice('Repartir en arrière', 'e')
            .choice('Aller à droite', 's')
    ;
};
