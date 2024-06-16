import Scene from '../Scene';
import Button from '../Button';
import ButtonProvider from '../ButtonProvider';
import Game, { Tree } from '../Game';
import DisplayWrapperHandler from './Event/DisplayWrapperHandler';
import HandlerInterface from './Event/HandlerInterface';
import SceneProvider from './SceneProvider';

class ChoiceToBuild {
    private _title: string;
    private _link: string;

    constructor(private canvas: HTMLCanvasElement, private index) {
    }

    title(title: string) {
        this._title = title;

        return this;
    }

    link(link: string) {
        this._link = link;
    }

    toChoice(): Button {
        return ButtonProvider.provideFromCanvas(this.canvas, this.index, this._link, this._title);
    }
}

export class SceneToBuild {
    public _id: string;
    private _name: string;
    private _choices: ChoiceToBuild[] = [];
    private _img: any;
    private handlers: HandlerInterface[] = [];

    constructor(private canvas: HTMLCanvasElement) {}

    public toScene(): Scene {
        if (!this.id || !this.name || this._choices.length < 0 || this._choices.length > 4) {
            throw new Error('Invalid Script');
        }

        let choices = this._choices.map(choice => choice.toChoice());
        return new Scene(this._img, this._name, choices, this.handlers);
    }

    public id(id: string) {
        this._id = id;
    }

    public name(name: string) {
        this._name = name;
    }

    public img(img) {
        this._img = img;
    }

    public choice(title: string = null) {
        const choice = new ChoiceToBuild(this.canvas, this._choices.length);

        this._choices.push(choice);

        return choice.title(title);
    }

    onDisplay(handler: () => void) {
        this.handlers.push(new DisplayWrapperHandler(handler));
    }
}

export type BuildProvider = (scene: SceneToBuild, game: Game) => void;

export default class ScriptBuilder {
    private _tree: Tree = {};

    private actualScene: SceneToBuild;

    constructor(public canvas: HTMLCanvasElement) {
    }

    public tree(): Tree {
        return this._tree;
    }

    public add(id: string, build: BuildProvider) {
        this.actualScene = new SceneToBuild(this.canvas);

        this._tree[id] = new SceneProvider(this.canvas, build);
    }
}
