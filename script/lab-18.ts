import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans pièce très banale');

    LabyrinthBuilder.build(scene, game)
        .link('hogwarts-o').from('e')
            .choice('Repartir en arrière ', 'o')
            .choice('Porte en face', 'e')
            .choice('Porte à gauche', 's')

        .link('lab-21').from('n')
            .choice('Demi tour..', 's')
            .choice('Porte à droite', 'o')
            .choice('Porte au fond à gauche', 'e')

        .link('lab-34').from('o')
            .choice('Demi-tour !', 'e')
            .choice('Porte en face', 'o')
            .choice('A droite SVP', 's')
    ;
};
