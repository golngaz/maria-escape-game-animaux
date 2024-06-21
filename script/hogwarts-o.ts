import img from '../assets/img/hogwarts-outside.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);

    scene.title('Poudlard - Entrée OUEST');
    scene.dialog("Vous vous retrouvez devant la porte \"Ouest\" de l'école...\n\nVous êtes perdu mon enfant ? \nOu c'était pour prendre l'air ?");

    scene.choice('Repartir').link('lab-18').onClick(() => game.var('lab-from', 'o'));
    scene.choice("*Dabber* (oui, je prenais l'air bien suuuuur)").link('dab-easter').onClick(() => game.var('dab-link', 'hogwarts-o'));
    scene.choice('*Pleurer*').link('hogwarts-o').onClick(() => game.score--);
};
