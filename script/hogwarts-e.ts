import img from '../assets/img/hogwarts-outside.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Entrée EST');
    scene.dialog('Vous vous retrouvez devant la porte "Est" de l\'école');

    scene.choice('Entrer').link('lab-u').onClick(() => game.var('lab-from', 'e'));

    scene.onDisplay(() => game.enableMap());
};
