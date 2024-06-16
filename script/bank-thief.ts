import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');
    scene.dialog('Vous essayez de voler la banque ? C\'est inacceptable ! \n Si vous continuez, j\'appelle la brigade de police magique');

    scene.choice('Désolé...').link('bank').onClick(game => game.score--);

    scene.onDisplay(() => {
        game.var('attempted-theft', true);
    })
};
