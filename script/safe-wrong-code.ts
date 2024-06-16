import img from '../assets/img/closed-safe.jpg';
import { SceneToBuild } from '../src/Script/ScriptBuilder';
import Game from '../src/Game';

export default (scene: SceneToBuild, game: Game) => {
    scene.img(img);
    scene.title('Coffre-fort');

    scene.dialog('Il semble que ce code ne soit pas le bon');

    scene.choice('J\'ai dû me tromper quelque part...').link('safe').onClick(game => game.score--);
};
