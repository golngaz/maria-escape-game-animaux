import img from '../assets/img/labo-book.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labo de Chimie');
    scene.dialog('Recette pour la potion "Potionis Virtutis"\n\n* 3 feuilles de lavande\n* 2 gouttes de sérum de vérité\n* 1 larme de Licorne');

    scene.choice('Revenir au sommaire').link('potion-making');
};
