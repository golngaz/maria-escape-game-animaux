import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une petite pièce remplie de portes');

    LabyrinthBuilder.build(scene, game)
        .link('lab-14').from('e')
            .choice('Repartir en arrière', 'o')
            .choice('Porte à gauche', 's')
            .choice('Porte à droite', 'n')
            .choice('Porte en face', 'e')

        .link('lab-1').from('s').onClick(() => game.disableMap())
            .choice('Porte à gauche', 'o')
            .choice('Porte en face', 's')
            .choice('Porte à droite', 'e')
            .choice('Repartir en arrière', 'n')

        .link('lab-c').from('n')
            .choice('Porte à droite', 'o')
            .choice('Porte à gauche', 'e')
            .choice('Porte en face', 'n')
            .choice('Repartir en arrière', 's')

        .link('lab-11').from('o')
            .choice('Porte à droite', 's')
            .choice('Porte à gauche', 'n')
            .choice('Porte d\'en face', 'o')
            .choice('Repartir en arrière', 'e')
    ;
};
