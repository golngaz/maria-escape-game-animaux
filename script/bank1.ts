import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');


    if (game.var('attempted-theft') === true) {
        scene.dialog('Vous rigolez j\'espère ?');
        scene.choice('Je rigole, je rigole !').link('bank');
    } else {
        scene.dialog('Quel est le numéro de votre compte en banque ?');

        scene.choice('351305').link('bank-thief');
        scene.choice('999995').link('bank-thief');
        scene.choice('464855').link('bank-thief');
        scene.choice('789877').link('bank-thief');
    }
};
