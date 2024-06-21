import img from '../assets/img/labo-book.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labo de Chimie');
    scene.dialog('Vous voyez le livre tourner les pages de lui-même\njusqu\'a une page blanche révélant\nla recette de la potion "Lumos"');

    scene.choice('Lire la recette').link('potion-making-lumos');
};
