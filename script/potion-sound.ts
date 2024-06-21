import img from '../assets/img/labo.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';
import { LabyrinthBuilder } from '../src/Script/LabyrinthBuilder';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labo de Chimie');
    scene.dialog('*Vous entendez un bruit*\n\nDans la panique, Nifleur vient de faire tomber la fiole\nde potions "Lumos"');

    scene.choice('Partir en courant').link('potion-sound-hidden').onClick(game => game.score -= 2);
    scene.choice('Pas le choix... On doit refaire la potion !').link('potion-making')
};
