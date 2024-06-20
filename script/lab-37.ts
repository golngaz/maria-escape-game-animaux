import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une simple salle un tantinet \nplus petite que la moyenne');

    LabyrinthBuilder.build(scene, game)
        .link('lab-7').from('o')
            .choice('Porte de gauche', 'o')
            .choice('Repartir en arrière', 'n')
            .choice('Porte à droite', 'e')

        .link('lab-7').from('s')
            .choice('Revenir en arrière', 'e')
            .choice('Porte à droite', 'o')
            .choice('Porte à gauche', 'n')

        .link('lab-24-10-37-e').from('n')
            .choice('Porte en face', 'e')
            .choice('Porte en face', 'n')
            .choice('Revenir en arrière', 'o')
    ;
};
