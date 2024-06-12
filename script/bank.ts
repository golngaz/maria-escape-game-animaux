import lionImg from '../assets/img/lion.jpg';
import { SceneToBuild, Vars } from '../src/ScriptBuilder';

export default (scene: SceneToBuild, vars: Vars) => {
    scene.id('bank');
    scene.name('Bonjour, vous voulez retirer de l\'argent ?');
    scene.img(lionImg);

    scene.choice('BLOQUEEE').link('bank');
};
