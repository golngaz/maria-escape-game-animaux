export type FromType = 'n' | 'e' | 'o' | 's';

class Link {
    public _from: string = null;

    public construct(private link: string, private scene: SceneToBuild, private game: Game) {}

    public from(from: FromType) {
        this._from = from;
    }

    public choice(directionChoice: string, from?: FromType) {
        if (!from || from === game.var('lab-from')) {
            const link = this.scene.choice(directionChoice).link(this.link);

            if (this._from) {
                link.onClick(() => game.var('lab-from', this._from));
            }
        }
        
    }
}

export class LabyrinthBuilder {

    private construct(private scene: SceneToBuild, private game: Game) {}

    public static build(scene: SceneToBuild, game: Game) {
        return new self(scene, game)
    }

    public link(link: string): this {
        this.actualLink = new Link(link, this.scene, this.game);

        this.links.push(this.actualLink);
    }
}