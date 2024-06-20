import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une pièce de bonne facture');

    LabyrinthBuilder.build(scene, game)
        .link('lab-28').from('s')
            .choice('Repartir en arrière', 'n')
            .choice('Porte à droite', 'e')

        .link('lab-25').from('o')
            .choice('Repartir en arrière', 'e')
            .choice('Porte de gauche', 'n')
    ;
};
