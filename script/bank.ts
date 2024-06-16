import lionImg from '../assets/img/lion.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.name('Bonjour, vous voulez retirer de l\'argent ?');
    scene.img(lionImg);

    scene.choice('BLOQUEEE').link('bank');
};
