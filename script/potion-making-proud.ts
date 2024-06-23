import img from '../assets/img/labo-book.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Salle de cours de potions magiques');
    scene.dialog('Recette pour la potion "Elixir de Sagesse"\n\n* 2 cheveux de Gryffondor\n* 1 pincée de poussière d\'étoile\n* 3 gouttes de venin de basilic');

    scene.choice('Revenir au sommaire').link('potion-making');
};
