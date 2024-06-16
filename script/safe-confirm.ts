import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');
    scene.dialog('Ah, ce coffre là ? Très bien, suivez-moi');

    scene.choice('...').link('safe').onClick(game => game.score += 2);
};
