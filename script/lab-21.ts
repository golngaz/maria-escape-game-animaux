import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une petite salle très sombre');

    LabyrinthBuilder.build(scene, game)
        .link('lab-18').from('s')
            .choice('Continuer..', 'e')
            .choice('Demi-tour..', 'n')

        .link('lab-21-17').from('o')
            .choice('Continuer..', 'n')
            .choice('Demi-tour..', 'e')
    ;
};
