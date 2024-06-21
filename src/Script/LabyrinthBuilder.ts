import { SceneToBuild } from './ScriptBuilder';
import Game from '../Game';

export type FromType = 'n' | 'e' | 'o' | 's';

class Link {
    public _from: string = null;
    private _handler: () => void = null;

    public constructor(private _link: string, private scene: SceneToBuild, private game: Game) {}

    public from(from: FromType) {
        this._from = from;

        return this;
    }

    public choice(directionChoice: string, from?: FromType): this {
        if (!from || from === this.game.var('lab-from')) {
            const link = this.scene.choice(directionChoice).link(this._link);

            if (this._from) {
                link.onClick(() => this.game.var('lab-from', this._from));
            }

            if (this._handler) {
                link.onClick(this._handler);
            }
        }

        return this;
    }

    public link(link: string): Link {
        return new Link(link, this.scene, this.game);
    }

    onClick(handler: () => void) {
        this._handler = handler;

        return this;
    }
}

export class LabyrinthBuilder {
    private constructor(private scene: SceneToBuild, private game: Game) {}

    public static build(scene: SceneToBuild, game: Game) {
        return new LabyrinthBuilder(scene, game)
    }

    public link(link: string): Link {
        return new Link(link, this.scene, this.game);
    }
}
