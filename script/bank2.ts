import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');
    scene.dialog('Mais, êtes-vous majeur, au moins ?');

    scene.choice('Tout à fait !').link('bank-strange-question-response');
    scene.choice('Heu... Non...').link('bank-strange-question-response');
    scene.choice('*Fuir, afin d\'éviter la question*').link('index').onClick(game => game.score--);
};
