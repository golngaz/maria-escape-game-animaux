import img from '../assets/img/labo.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Salle de cours de potions magiques - mal caché dans un coin');
    scene.dialog('Vous vous cachez...\n\n\n\nVous n\'allez pas rester la toute la journée ?');

    scene.choice('Prendre son courage à deux mains').link('potion-making').onClick(game => game.score++);
};
