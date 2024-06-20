import img from '../assets/img/hogwarts-corridor.jpeg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labyrinthe');
    scene.dialog('Vous vous retrouvez dans une pièce avec deux portes');

    LabyrinthBuilder.build(scene, game)
        .link('lab-23').from('e')
            .choice('Aller au fond à gauche', 'e')
            .choice('Repartir en arrière', 'o')
        .link('lab-u').from('s')
            .choice('Aller au fond à droite', 'o')
            .choice('Repartir en arrière', 'e')
    ;
};
