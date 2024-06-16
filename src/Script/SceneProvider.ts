import { BuildProvider, SceneToBuild } from './ScriptBuilder';
import Game from '../Game';

export default class SceneProvider {
    constructor(private canvas: HTMLCanvasElement, private buildProvider: BuildProvider) {
    }

    public provide(game: Game) {
        let sceneToBuild = new SceneToBuild(this.canvas);

        this.buildProvider(sceneToBuild, game);

        return sceneToBuild.toScene();
    }
}
