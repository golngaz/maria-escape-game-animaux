import img from '../assets/img/watchmaker.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Chez le maître du temps');

    scene.dialog("*La magie se met en place, et vous voyez votre montre\nà gousset léviter et commencer à se réparer d'elle-même*\n\nCa a marché, comme prévu !\nMes formules magiques ne ratent jamais.");

    scene.choice('Merci beaucoup monsieur au revoir !').link('index');
    scene.choice('Ciao').link('watchmaker-goodbye-angry');
    scene.choice('Je vous laisse la montre. En réalité, elle appartient à M. Kowalski, je lui dirai de venir la récupérer ici')
        .link('index')
        .onClick(() => game.score += 2)
    ;

    scene.onDisplay(() => {
        game.var('watchmaker-completed', true);
    })
};
