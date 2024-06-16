import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');
    scene.dialog('Je connais parfaitement le propriétaire de ce coffre,\n et il ne vous appartient pas !');

    scene.choice('Au temps pour moi').link('bank-ok').onClick(game => game.score--);
};
