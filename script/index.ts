import unicornImg from '../assets/img/licorne.jpg';
import { SceneToBuild, Vars } from '../src/ScriptBuilder';

export default (scene: SceneToBuild, vars: Vars) => {
    scene.id('index');
    scene.name('Chemin de traverse');
    scene.img(unicornImg);

    scene.choice('Banque').link('bank');
    scene.choice('Lion').link('lion');
    scene.choice('Lion to canard').link('lion2');
    scene.choice('Lion to canard 2').link('lion2');
};
