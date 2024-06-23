import img from '../assets/img/watchmaker.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chez le maître du temps');

    scene.dialog('Je ne sais pas quelle heure il est....\n\n\nJe rigole, bien sûr, il est 15h45 !');
 

    scene.choice('Merci').link('watchmaker-reparo');
};
