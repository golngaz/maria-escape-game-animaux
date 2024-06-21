import Scene from './Scene';
import Emitter from './Emitter';
import Button from './Button';
import DisplayEvent from './Script/Event/DisplayEvent';
import SceneProvider from './Script/SceneProvider';
import { Howl } from 'howler';
import music from '../assets/music/main-theme.mp3';
import bubbleImg from '../assets/img/bubble-bd.png'
import mapButtonImg from '../assets/img/map-button.png'
import mapImg from '../assets/img/map-hogwarts.png'
import SelectChoiceEvent from './Script/Event/SelectChoiceEvent';
import Rect from './Rect';

type VarDatum = string | boolean | null | Array<string> | Array<boolean>;

export type Tree = Record<string, SceneProvider>;

export default class Game {
    /**
     * vers négatif à coup de -1 chaque game over
     */
    public score = 4;
    private readonly ctx: CanvasRenderingContext2D;

    public _tree: Tree;

    private lastBindChoiceButton: null | number = null;
    private lastBindMapButton: null | number = null;
    private vars: Record<string, VarDatum> = {};
    private actualScene: Scene = null;
    private _allowMap: boolean = false;
    private _mapDisplayed: boolean = false;
    private drawnScene: Scene;

    constructor(public _canvas: HTMLCanvasElement, private readonly emitter?: Emitter) {
        this.ctx = _canvas.getContext('2d');
        this.emitter = this.emitter === null ? this.emitter : new Emitter();

        this.init();
    }

    public run(tree: Tree, initBranch: string) {
        this._tree = tree;
        let sceneProvider = this._tree[initBranch];

        this.actualScene = sceneProvider.provide(this);

        this.draw();
    }

    draw() {
        const scene = this.actualScene;

        this.unbindEvents();

        this.setBackground(scene.img);

        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

        console.log('JE DRAW ', this._allowMap)
        this.drawMapButton();
        this.drawScore();

        if (this._mapDisplayed) {
            this.drawMap();
        } else {
            this.drawTitle(scene.title);
            this.drawDialog(scene.dialog);
            this.drawChoices(scene.choices);
        }

        this.drawnScene = scene;
    }

    private handleClickChoice(choices: Array<Button>) {
        return (e: MouseEvent) => {
            const { offsetX, offsetY } = e;
            choices.forEach((choice, i) => {
                if (choice.rect.contains(offsetX, offsetY)) {
                    const sceneProvider = this._tree[choice.treeLink];

                    if (!sceneProvider) {
                        throw new Error('La scene "' + choice.treeLink + '" est introuvable');
                    }

                    const clickEvent = new SelectChoiceEvent(this, i);
                    this.actualScene.handlers.filter(handler => handler.supports(clickEvent)).forEach(handler => handler.handle(clickEvent))

                    this.actualScene = sceneProvider.provide(this);
                    this.draw();
                    const event = new DisplayEvent(this);
                    this.actualScene.handlers.filter(handler => handler.supports(event)).forEach(handler => handler.handle(event))
                }
            });
        }
    }

    private drawChoices(choices: Array<Button>) {
        choices.forEach(choice => {
            choice.draw(this.ctx);
        });

        if (this.lastBindChoiceButton === null) {
            this.lastBindChoiceButton = this.emitter.emit(this._canvas, 'click', this.handleClickChoice(choices));
        }
    }

    private drawRoom(choice: Scene) {
        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Vous êtes dans la ${choice.dialog}`, this._canvas.width / 2 - 100, this._canvas.height / 2 - 100);
        // this.ctx.fillText(`Action: ${choice.action}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 70);
        // this.ctx.fillText(`Réponse: ${choice.response}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 40);
        this.ctx.fillText(`Cliquez pour revenir`, this._canvas.width / 2 - 100, this._canvas.height / 2 - 10);
    }

    public enableMap() {
        this._allowMap = true;
        this._mapDisplayed = false;
    }

    public disableMap() {
        this._allowMap = false;
        this._mapDisplayed = false;
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
    }

    public setBackground(img) {
        this._canvas.style.backgroundImage = `url(${img})`;
    }

    public var(key: string, value?: VarDatum): VarDatum {
        if (value === undefined) {
            return this.vars[key] === undefined ? null : this.vars[key];
        } else {
            this.vars[key] = value;
        }
    }

    private drawDialog(dialog: string) {
        const image = new Image();
        image.src = bubbleImg;

        const bubbleWidth = (this._canvas.width * 0.8) / 2;
        const bubbleX = (0.1 * this._canvas.width) + bubbleWidth;
        const bubbleY = 0.1 * this._canvas.height;
        const bubbleHeight = this._canvas.height * 0.5;

        image.onload = () => {
            this.ctx.globalAlpha = 0.7;
            this.ctx.drawImage(image, bubbleX, bubbleY, bubbleWidth, bubbleHeight);
            this.ctx.globalAlpha = 1;

            this.ctx.globalAlpha = 1.0;

            this.ctx.textBaseline = 'top';

            this.ctx.font = '20px "Playwrite NL"';
            this.ctx.fillStyle = 'rgba(0, 0, 0)';
            dialog.split('\n').forEach((line, i) => {
                const lineY = bubbleY + 55 + (40 * i);
                this.ctx.fillText(line, bubbleX + 40, lineY);
            });
        }
    }

    private drawTitle(title: string) {
        this.ctx.globalAlpha = 1.0;
        this.ctx.font = '40px "Playwrite NL"';
        // this.ctx.fillStyle = 'black';
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(title, 0.5 * this._canvas.width, 0.08 * this._canvas.height);

        this.ctx.textAlign = 'left';
    }

    private drawScore() {
        this.ctx.globalAlpha = 1.0;
        this.ctx.font = '30px "Playwrite NL"';
        this.ctx.fillStyle = 'red';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Score : ' + this.score.toString(), 0.04 * this._canvas.width, 0.08 * this._canvas.height);

        this.ctx.textAlign = 'left';
    }

    private drawMapButton() {
        if (!this._allowMap) {
            return;
        }

        const rect = new Rect(0.04 * this._canvas.width, 0.15 * this._canvas.height, 150, 150);

        this.lastBindMapButton = this.emitter.emit(this._canvas, 'click', (e) => {
            if (rect.contains(e.offsetX, e.offsetY)) {
                this._mapDisplayed = !this._mapDisplayed;
                this.draw();
            }
        });

        rect.drawImg(this.ctx, mapButtonImg)
    }

    private drawMap() {
        const rect = new Rect(0, 0, this._canvas.width, this._canvas.height);


        rect.drawImg(this.ctx, mapImg);
    }

    private unbindEvents() {
        if (this.lastBindChoiceButton !== null) {
            this.emitter.off(this.lastBindChoiceButton);
            this.lastBindChoiceButton = null;
        }

        if (this.lastBindMapButton !== null) {
            this.emitter.off(this.lastBindMapButton);

            this.lastBindMapButton = null;
        }

    }
}
