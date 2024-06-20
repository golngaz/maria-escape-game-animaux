import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une petite pièce possédant une porte');

    LabyrinthBuilder.build(scene, game)
        .link('lab-25').from('e')
            .choice('Repartir en arrière', 'o')
            .choice('Porte à gauche', 's')

        .link('lab-36').from('n')
            .choice('Porte à droite', 'o')
            .choice('Repartir en arrière', 's')
    ;
};
