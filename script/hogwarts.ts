import img from '../assets/img/hogwarts-outside.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Entrée');
    scene.dialog('Vous vous retrouvez dans un couloir');

    scene.choice('Entrer').link('lab-u');
};
