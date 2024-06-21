import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('C\'est une impasse !');

    LabyrinthBuilder.build(scene, game)
        .link('lab-21-17').from('s')
            .choice('Repartir en arrière ', 'n')
    ;
};
