import lionImg from '../assets/img/lion.jpg';
import { SceneToBuild, Vars } from '../src/ScriptBuilder';

export default (scene: SceneToBuild, vars: Vars) => {
    scene.id('lion2');
    scene.name('Agrou 2');
    scene.img(lionImg);

    scene.choice('Choix canard').link('canard');
    scene.choice('Choix pas canard').link('index');
};
