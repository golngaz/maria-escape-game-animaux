import Scene from './Scene';
import { Tree } from './Loader';
import Button from './Button';
import Rect from './Rect';
import ButtonProvider from './ButtonProvider';

class ChoiceToBuild {
    private _title: string;
    private _link: string;

    constructor(private builder: ScriptBuilder, private index) {
    }

    title(title: string) {
        this._title = title;

        return this;
    }

    link(link: string) {
        this._link = link;
    }

    toChoice(): Button {
        return ButtonProvider.provideFromCanvas(this.builder.canvas, this.index, this._link, this._title);
    }
}

export class SceneToBuild {
    public _id: string;
    private _name: string;
    private _choices: ChoiceToBuild[] = [];
    private _img: any;

    constructor(private builder: ScriptBuilder) {}

    public toScene(): Scene {
        if (!this.id || !this.name || this._choices.length < 0 || this._choices.length > 4) {
            throw new Error('Invalid Script');
        }

        let choices = this._choices.map(choice => choice.toChoice());
        return new Scene(this._img, this._name, choices);
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
        const choice = new ChoiceToBuild(this.builder, this._choices.length);

        this._choices.push(choice);

        return choice.title(title);
    }

    onDisplay(param: (game: Game) => void) {
        throw new Error('@todo'); // @todo
    }
}

export type Vars = Record<string, boolean | string>;

export type BuildProvider = (scene: SceneToBuild, vars: Vars) => void;

export default class ScriptBuilder {
    private _tree: Tree = {};

    private actualScene: SceneToBuild;

    private vars: Vars;

    constructor(public canvas: HTMLCanvasElement) {
    }

    public tree(): Tree {
        return this._tree;
    }

    public add(build: BuildProvider) {
        this.actualScene = new SceneToBuild(this);

        build(this.actualScene, this.vars);

        this._tree[this.actualScene._id] = this.actualScene.toScene();
    }
}
