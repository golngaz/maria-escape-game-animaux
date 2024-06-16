import img from '../assets/img/closed-safe.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Coffre-fort');

    scene.dialog('Nous sommes arrivés au coffre N°5, quel est le mot de passe ?');

    scene.choice('ALPHA').link('safe-wrong-code');
    scene.choice('PORO').link('safe-wrong-code');
    scene.choice('*Tenter un Alohomora*').link('safe-alohomora');
    scene.choice('PARA').link('safe-open');
};
