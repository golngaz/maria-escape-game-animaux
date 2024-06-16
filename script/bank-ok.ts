import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');
    scene.dialog('Très bien, quel est le numéro du coffre ?');

    scene.choice('N°13').link('bank-wrong-safe');
    scene.choice('N°3').link('bank-wrong-safe');
    scene.choice('N°5').link('safe-confirm');
    scene.choice('N°8').link('bank-wrong-safe');
};
