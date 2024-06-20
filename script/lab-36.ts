import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une salle étrange géométrique');

    LabyrinthBuilder.build(scene, game)
        .link('lab-11').from('s')
            .choice('Porte à fond à droite', 's')
            .choice('Repartir en arrière', 'n')
            .choice('Porte à gauche', 'o')

        .link('lab-c').from('s')
            .choice('Revenir en arrière', 'o')
            .choice('Porte à droite', 'n')
            .choice('Porte à gauche', 's')

        .link('lab-7').from('n')
            .choice('Porte en face', 'n')
            .choice('Revenir en arrière', 's')
            .choice('Porte à droite', 'o')
    ;
};
