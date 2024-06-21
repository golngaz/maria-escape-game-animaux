import img from '../assets/img/dab.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Maître du dab');
    scene.dialog('Vous dabbez comme un dieu');

    scene.choice('Merci').link('super-dab').onClick(() => game.score++);
};
