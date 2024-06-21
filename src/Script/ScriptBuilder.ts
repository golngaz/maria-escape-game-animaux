import Scene from '../Scene';
import Button from '../Button';
import ButtonProvider from '../ButtonProvider';
import Game, { Tree } from '../Game';
import DisplayWrapperHandler from './Event/DisplayWrapperHandler';
import HandlerInterface from './Event/HandlerInterface';
import SceneProvider from './SceneProvider';
import { Howl } from 'howler';
import SelectChoiceWrapperHandler from './Event/SelectChoiceWrapperHandler';

class ChoiceToBuild {
    private _title: string;
    private _link: string;
    public handlers: Array<SelectChoiceWrapperHandler> = [];

    constructor(private canvas: HTMLCanvasElement, private index) {
    }

    title(title: string) {
        this._title = title;

        return this;
    }

    link(link: string) {
        this._link = link;

        return this;
    }

    toChoice(): Button {
        return ButtonProvider.provideFromCanvas(this.canvas, this.index, this._link, this._title);
    }

    onClick(handler) {
        this.handlers.push(new SelectChoiceWrapperHandler(this.index, handler))

        return this;
    }
}

export class SceneToBuild {
    public _id: string;
    private _title: string;
    private _dialog: string;
    private _choices: ChoiceToBuild[] = [];
    private _img: any;
    private handlers: HandlerInterface[] = [];

    constructor(private canvas: HTMLCanvasElement) {}

    public toScene(): Scene {
        if (!this.id || this._choices.length < 0 || this._choices.length > 4) {
            alert('Erreur');
            throw new Error('Invalid Script');
        }

        let choices = this._choices.map(choice => choice.toChoice());
        this._choices.forEach((choiceToBuild: ChoiceToBuild) => {
            choiceToBuild.handlers.forEach(handler => {
                this.handlers.push(handler);
            });
        })

        return new Scene(this._img, this._title, this._dialog, choices, this.handlers);
    }

    public id(id: string) {
        this._id = id;
    }

    public title(name: string) {
        this._title = name;
    }

    public img(img) {
        this._img = img;
    }

    public choice(title: string = null) {
        const choice = new ChoiceToBuild(this.canvas, this._choices.length);

        this._choices.push(choice);

        return choice.title(title);
    }

    /**
     * @deprecated gérer la séquentialité des events pour pouvoir bien l'utiliser (event qui s'effectue pendant le draw de l'écran)
     */
    public onDisplay(handler: () => void) {
        this.handlers.push(new DisplayWrapperHandler(handler));
    }

    /**
     * @deprecated à terminer (les musiques se cumulent les unes sur les autres)
     */
    public playMusic(music) {
        this.onDisplay(() => {
            const howl = new Howl({
                src: [music],
                loop: true,
                volume: 1,
                onload: () => {
                    console.log('Music loaded successfully!');
                },
                onloaderror: (id, err) => {
                    console.error('Failed to load music:', err);
                }
            });
            // Jouer la musique après l'interaction de l'utilisateur
            howl.play();
        });
    }

    dialog(dialog: string) {
        this._dialog = dialog;
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
