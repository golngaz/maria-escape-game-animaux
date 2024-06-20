import img from '../assets/img/dab.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Maître du dab');
    scene.dialog('Vous dabbez comme un dieu');

    let varLink = game.var('dab-link') as string | null;

    const link = varLink === null ? 'safe-open' : varLink;

    scene.choice('Merci').link(link);
};
