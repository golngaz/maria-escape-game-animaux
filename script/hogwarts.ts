import img from '../assets/img/hogwarts.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard');
    scene.dialog('Vous contemplez la meilleure école de sorcier du monde');

    scene.choice('Y aller').link('hogwarts-outside');
};
