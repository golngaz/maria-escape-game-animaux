import unicornImg from '../assets/img/licorne.jpg';
import lionImg from '../assets/img/lion.jpg';
import duckImg from '../assets/img/duck.png';
import script from './script.json';

class Rect {
    constructor(public x, public y, public width, public height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx: CanvasRenderingContext2D, text?: string) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    contains(x, y) {
        return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
    }
}

class Button {
    constructor(public rect: Rect, public treeLink: keyof Tree, public text = '') {
    }

    public draw(ctx) {
        this.rect.draw(ctx, this.text);

        if (this.text) {
            ctx.fillStyle = 'black';
            ctx.fillText(this.text, this.rect.x + 10, this.rect.y + 110);
        }
    }
}

class Scene {
    constructor(public img, public text: string, public choices: Array<Button>) {
    }
}

type Tree = Record<string, Scene>;

class Game {
    /**
     * vers négatif à coup de -1 chaque game over
     */
    public score = 0;
    private ctx: CanvasRenderingContext2D;

    private tree: Tree;

    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d');

        this.init();
    }

    public run(tree: Tree, initBranch: string) {
        this.tree = tree;
        this.drawScene(this.tree[initBranch]);
    }

    private drawScene(scene: Scene) {
        this.drawChoices(scene.choices);

        this.setBackground(scene.img);
    }

    private drawChoices(choices: Array<Button>) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        choices.forEach(choice => {
            choice.draw(this.ctx);
        });

        this.canvas.addEventListener('click', (e) => {
            const { offsetX, offsetY } = e;
            choices.forEach((choice, i) => {
                if (choice.rect.contains(offsetX, offsetY)) {
                    this.drawScene(this.tree[choice.treeLink]);
                }
            });
        });
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

    public rectFromIndex(index: number) {
        return new Rect(
            canvas.width * (((index + 1) * 2) / 10),
            canvas.height * 0.4,
            100,
            200
        )
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

let canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

// @todo passer dans le bouton createFromIndex ou truc dans le genre


const game = new Game(canvas);

const tree = { // @todo supprimer, et faire fonctionner le loader
    init: new Scene(unicornImg, 'Chemin de traverse', [
        new Button(game.rectFromIndex(0),'banque', 'Banque'),
        new Button(game.rectFromIndex(1), 'lion', 'Lion'),
        new Button(game.rectFromIndex(2), 'lion2', 'Lion to canard')
    ]),
    banque: new Scene(lionImg, 'Bonjour, vous voulez retirer de l\'argent ?', [
        new Button(game.rectFromIndex(0), 'banque', 'BLOQUEEE'),
    ]),
    lion: new Scene(lionImg, 'Agrou', [
        new Button(game.rectFromIndex(0), 'init', 'Perdu ?'),
    ], ),
    lion2: new Scene(lionImg, 'Agrou 2', [
        new Button(game.rectFromIndex(0), 'canard', 'Choix canard'),
        new Button(game.rectFromIndex(1), 'init', 'Choix pas canard'),
    ]),
    canard: new Scene(duckImg, 'coin coin', []),
}

type SceneDataType = { img: string, name: string, choices: Array<{ link: string, title: string }> };

class Loader {
    constructor(private data: Record<string, SceneDataType>) {
    }

    private async sceneFromData(data: SceneDataType, index: number): Promise<Scene> {
        const image = await import(data.img);

        let scene = new Scene(image, data.name, []);
        data.choices.forEach((choiceDatum) => {
            scene.choices.push(new Button(game.rectFromIndex(index), choiceDatum.link, choiceDatum.title));
        });

        return scene;
    }

    async tree(): Promise<Record<string, Scene>> {
        let result = {}
        let data = this.data;
        for (const key of Object.keys(data)) {
            const index = Object.keys(data).indexOf(key);
            result[key] = await this.sceneFromData(data[key], index);
        }

        return result;
    }
}

const loader = new Loader(script);

// loader.tree().then((tree) => game.run(tree, 'init'));

game.run(tree, 'init');
