import duckImg from '../assets/img/duck.png';
import { SceneToBuild, Vars } from '../src/ScriptBuilder';

export default (scene: SceneToBuild, vars: Vars) => {
    scene.id('canard');
    scene.name('coin coin');
    scene.img(duckImg);
};
