import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une salle étrange géométrique');

    LabyrinthBuilder.build(scene, game)
        .link('lab-c').from('o')
            .choice('Demi-tour ! ', 'n')
            .choice('Continuer', 'o')

        .link('lab-6').from('e')
            .choice('Demi-tour !', 'o')
            .choice('Continuer', 'n')
    ;
};
