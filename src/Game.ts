import Scene from './Scene';
import Emitter from './Emitter';
import Button from './Button';
import DisplayEvent from './Script/Event/DisplayEvent';
import SceneProvider from './Script/SceneProvider';
import { Howl } from 'howler';
import music from '../assets/music/main-theme.mp3';

type VarDatum = string | boolean | null;

export type Tree = Record<string, SceneProvider>;

export default class Game {
    /**
     * vers négatif à coup de -1 chaque game over
     */
    public score = 0;
    private readonly ctx: CanvasRenderingContext2D;

    public _tree: Tree;

    private lastBindButton: null | number = null;
    private vars: Record<string, VarDatum> = {};

    constructor(public _canvas: HTMLCanvasElement, private readonly emitter?: Emitter) {
        this.ctx = _canvas.getContext('2d');
        this.emitter = this.emitter === null ? this.emitter : new Emitter();

        this.init();
    }

    public run(tree: Tree, initBranch: string) {
        this._tree = tree;
        let sceneProvider = this._tree[initBranch];
        this.drawScene(sceneProvider.provide(this));
    }

    private drawScene(scene: Scene) {
        if (this.lastBindButton !== null) {
            this.emitter.off(this.lastBindButton);
            this.lastBindButton = null;
        }

        this.drawChoices(scene.choices);
        this.setBackground(scene.img);
    }

    private handleClickButton(choices: Array<Button>) {
        return (e) => {
            const { offsetX, offsetY } = e;
            choices.forEach((choice, i) => {
                if (choice.rect.contains(offsetX, offsetY)) {
                    const sceneProvider = this._tree[choice.treeLink];

                    if (!sceneProvider) {
                        throw new Error('La scene "' + choice.treeLink + '" est introuvable');
                    }

                    const scene = sceneProvider.provide(this);
                    this.drawScene(scene);
                    const event = new DisplayEvent(this);
                    scene.handlers.filter(handler => handler.supports(event)).forEach(handler => handler.handle(event))
                }
            });
        }
    }

    private drawChoices(choices: Array<Button>) {
        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        choices.forEach(choice => {
            choice.draw(this.ctx);
        });

        if (this.lastBindButton === null) {
            this.lastBindButton = this.emitter.emit(this._canvas, 'click', this.handleClickButton(choices));
        }
    }

    private drawRoom(choice: Scene) {
        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Vous êtes dans la ${choice.text}`, this._canvas.width / 2 - 100, this._canvas.height / 2 - 100);
        // this.ctx.fillText(`Action: ${choice.action}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 70);
        // this.ctx.fillText(`Réponse: ${choice.response}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 40);
        this.ctx.fillText(`Cliquez pour revenir`, this._canvas.width / 2 - 100, this._canvas.height / 2 - 10);
    }

    public init() {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;

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
        document.getElementById('intro').remove();
    }

    public setBackground(img) {
        this._canvas.style.backgroundImage = `url(${img})`;
    }

    public var(key: string, value?: VarDatum): VarDatum {
        console.log(key, value)
        if (value === undefined) {
            return this.vars[key] === undefined ? null : this.vars[key];
        } else {
            this.vars[key] = value;
        }
    }
}
