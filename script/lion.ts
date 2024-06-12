import lionImg from '../assets/img/lion.jpg';
import { SceneToBuild, Vars } from '../src/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild) => {
    scene.id('lion');
    scene.name('Agrou');
    scene.img(lionImg);

    scene.choice('Perdu ?').link('index');

    scene.onDisplay((game: Game) => {
        game.var('lion-saw', true)
    })
};
