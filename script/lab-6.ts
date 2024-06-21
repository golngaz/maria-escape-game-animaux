import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une salle étrange cylindrique');

    LabyrinthBuilder.build(scene, game)
        .link('lab-12').from('o')
            .choice('Demi-tour ! ', 'e')
            .choice('Continuer', 'o')

        .link('lab-34').from('e')
            .choice('Demi-tour !', 'o')
            .choice('Continuer', 'e')
    ;
};
