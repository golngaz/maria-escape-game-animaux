import duckImg from '../assets/img/duck.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.id('canard');
    scene.name('coin coin');
    scene.img(duckImg);
};
