import { Tree } from './Loader';
import Scene from './Scene';
import Emitter from './Emitter';
import Button from './Button';

export default class Game {
    /**
     * vers négatif à coup de -1 chaque game over
     */
    public score = 0;
    private readonly ctx: CanvasRenderingContext2D;

    private tree: Tree;

    private lastBindButton: null | number = null;

    constructor(private canvas: HTMLCanvasElement, private readonly emitter?: Emitter) {
        this.ctx = canvas.getContext('2d');
        this.emitter = this.emitter === null ? this.emitter : new Emitter();

        this.init();
    }

    public run(tree: Tree, initBranch: string) {
        this.tree = tree;
        this.drawScene(this.tree[initBranch]);
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
                    const treeElement = this.tree[choice.treeLink];

                    if (!treeElement) {
                        throw new Error('La scene "' + choice.treeLink + '" est introuvable');
                    }
                    this.drawScene(treeElement);
                }
            });
        }
    }

    private drawChoices(choices: Array<Button>) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        choices.forEach(choice => {
            choice.draw(this.ctx);
        });

        if (this.lastBindButton === null) {
            this.lastBindButton = this.emitter.emit(this.canvas, 'click', this.handleClickButton(choices));
        }
    }

    private drawRoom(choice: Scene) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Vous êtes dans la ${choice.text}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 100);
        // this.ctx.fillText(`Action: ${choice.action}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 70);
        // this.ctx.fillText(`Réponse: ${choice.response}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 40);
        this.ctx.fillText(`Cliquez pour revenir`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 10);
    }

    private gameover() {
        this.score--;
        this.init();
    }

    public init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    public setBackground(img) {
        this.canvas.style.backgroundImage = `url(${img})`;
    }
}
