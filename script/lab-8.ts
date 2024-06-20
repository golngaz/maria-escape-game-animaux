import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous êtes dans une pièce avec deux portes, une fenêtre');

    LabyrinthBuilder.build(scene, game)
        .link('lab-un').from('o')
            .choice('Aller au fond à droite', 's')
            .choice('Repartir en arrière', 'e')

        .link('lab-22').from('n')
            .choice('Prendre la fenêtre', 'e')
            .choice('Prendre la fenêtre', 's')

        .link('lab-22').from('n')
            .choice('Prendre la porte au fond', 'e')
            .choice('Repartir en arrière', 's')
    ;
};
