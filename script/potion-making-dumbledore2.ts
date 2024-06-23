import img from '../assets/img/labo-dumbledore.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Salle de cours de potions magiques');
    scene.dialog("Ah Ah Ah\n\nMais oui, bien sûr\n\nQuoi qu'il en soit, ne vous embêtez pas plus longtemps,\nc'était ma potion que vous avez malencontreusement brisée\nJe n'en ai plus besoin, mais votre persévérance m'a impressioné");

    scene.choice("Merci Professeur Dumbledore").link('hogwarts-win').onClick(() => game.score += 2);
};
