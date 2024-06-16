import img from '../assets/img/goblin-blank.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Banque des Sorciers');
    scene.dialog('Bonjour, que souhaitez-vous ?');

    scene.choice('Retirer de l\'argent').link('bank1');
    scene.choice('Faire un crédit').link('bank2');
    scene.choice('Déposer de l\'argent').link('bank-ok');
    scene.choice('Je me suis perdu, désolé. *Repartir*').link('index');
};
