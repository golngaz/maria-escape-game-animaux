import img from '../assets/img/labo-book.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Labo de Chimie');
    scene.dialog('Recette pour la potion "Lumos"\n\n* 1 plume de hibou\n* 3 gouttes de lueur de luciole\n* 2 écailles de poisson-soleil');

    scene.choice("Je n'ai pas les ingédients pour faire cela...").link('potion-making-dumbledore');
};
