import img from '../assets/img/closed-safe.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Coffre-fort');

    if (game.var('alohomora-tried') !== true) {
        scene.dialog("Vous venez d'essayer d'ouvrir le coffre avec \ncette magie de bas étage ?!\nPouvez-vous un instant faire preuve d'humilité et considérer que\n vous n'êtes qu'un sorcier de mauvais rang ?\n\nNe recommencez plus jamais cela !");

        scene.choice('Je ne recommencerai plus').link('safe');

        scene.onDisplay(() => {
            game.var('alohomora-tried', true);
        });
    } else {
        scene.dialog("Je vais vraiment m'énerver, mon enfant, je vous signalerai\nà la police magique dès que nous nous retrouverons en dehors\nde la salle des coffres !");

        scene.choice('Oups...').link('safe').onClick(game => game.score--);
    }
};
