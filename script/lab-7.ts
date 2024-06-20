import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une simple salle');

    LabyrinthBuilder.build(scene, game)
        .link('lab-36').from('s')
            .choice('Porte à fond à gauche', 's')
            .choice('Repartir en arrière', 'n')
            .choice('Porte à gauche', 'o')

        .link('lab-37').from('n')
            .choice('Aller à droite', 'n')
            .choice('Repartir en arrière', 'o')
            .choice('Porte à gauche', 's')

        .link('lab-37').from('e')
            .choice('Porte au fond à gauche', 'n')
            .choice('Revenir en arrière', 's')
            .choice('Porte à droite', 'o')
    ;
};
