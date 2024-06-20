import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une pièce avec trois portes');

    LabyrinthBuilder.build(scene, game)
        .link('lab-22').from('s')
            .choice('Porte immédiatement à droite', 'e')
            .choice('Porte de gauche', 'o')
            .choice('Repartir en arrière', 'n')

        .link('lab-2').from('o')
            .choice('Porte immédiatement à gauche', 'n')
            .choice('Repartir en arrière', 'e')
            .choice('Porte au fond à gauche', 'o')

        .link('lab-r').from('e')
            .choice('Repartir en arrière', 'o')
            .choice('Aller à droite', 'n')
            .choice('Aller au fond à gauche', 'e')
    ;
};
