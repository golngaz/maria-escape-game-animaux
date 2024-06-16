import lionImg from '../assets/img/lion.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.name('Agrou');
    scene.img(lionImg);

    scene.choice('Perdu ?').link('index');

    scene.onDisplay(() => {
        game.var('lion-saw', true);
    });
};
