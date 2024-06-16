import img from '../assets/img/chemin_de_traverse.webp';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.choice('Banque je suis le bouton que tout le monde adore rgljh rgkhj \nrgkjh rgkjh rgkjhr gkjh rgkjhr gkjrh gkjr hzohrozjrh ogzurh gouzhr gouzhroughzrough zorugh zorugh ouh').link('bank');
    scene.choice('Lion').link('lion');
    scene.choice('Lion to canard').link('lion');
    scene.choice('Lion to canard 2').link('lion2');
};
