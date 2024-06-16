import img from '../assets/img/chemin_de_traverse.webp';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard ?');

    if (game.var('you-are-a-children') === true) {
        scene.dialog("Ce n'est pas vous qui décidez !");
    } else {
        scene.dialog("Vous décidez de vous rendre à Poudlard...\n\n\n\nCependant, vous réalisez que c'est beaucoup trop loin");
    }

    scene.choice('Rendre les autres objets près du chemin de traverse avant').link('index');
    scene.choice('Si, je VEUX aller à Poudlard, dessuite !!!').link('hogwarts-too-far').onClick(() => game.var('you-are-a-children', true));

    scene.onDisplay(() => game.var('try-hogwarts-too-far', true));
};
