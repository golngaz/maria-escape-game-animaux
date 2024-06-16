import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');
    scene.dialog('Vous êtes étrange, mon enfant...');

    scene.choice('...').link('bank');
    scene.choice('*Fuir*').link('index').onClick(game => game.score--);
};
