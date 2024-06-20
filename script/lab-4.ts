import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans une pièce sans portes');

    LabyrinthBuilder.build(scene, game)
        .link('lab-un').from('s')
            .choice('Repartir en arrière', 'n')
    ;
};
