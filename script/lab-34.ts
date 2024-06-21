import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans pièce très banale');

    LabyrinthBuilder.build(scene, game)
        .link('lab-6').from('o')
            .choice('Repartir en arrière ', 'e')
            .choice('Porte en face', 'o')
            .choice('Porte à droite', 's')

        .link('lab-18').from('e')
            .choice('Tour droit !', 'e')
            .choice('Demi tour..', 'o')
            .choice('Porte à gauche', 's')

        .link('lab-21-17').from('n')
            .choice('Demi-tour !', 's')
            .choice('A gauche SVP', 'e')
            .choice('A droite SVP', 'o')
    ;
};
