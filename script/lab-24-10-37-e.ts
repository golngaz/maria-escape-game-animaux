import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog("JE CROIS QUE TU T'ES PERDU LA NON ?\n\nGaël n'a pas eu le temps de terminer le labyrinthe\nde toute manière..");

    LabyrinthBuilder.build(scene, game)
        .link('lab-37').from('o')
            .choice('Repartir en arrière', 'n')

        .link('lab-37').from('o')
            .choice('Repartir en arrière', 'n')

        .link('lab-37').from('o')
            .choice('Repartir en arrière (oui encore)', 'n')

        .link('lab-24-10-37-e-easter-egg').from('o')
            .choice('Insister', 'n')
    ;
};
