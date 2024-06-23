import img from '../assets/img/labo.png';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';


export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Salle de cours de potions magiques');
    scene.dialog('*Vous entendez un bruit*\n\nDans la panique, Nifleur vient de faire tomber la fiole\nde potions "Lumos", qui se brise\n en milles morceaux');

    scene.choice('Partir en courant').link('potion-sound-hidden').onClick(game => game.score -= 2);
    scene.choice('Pas le choix... On doit refaire la potion !').link('potion-making')
};
