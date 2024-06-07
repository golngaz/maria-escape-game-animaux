import unicornImg from '../assets/img/licorne.jpg';

class Choice {
    constructor(public backgroundUrl, public title: string, public dialog: string, public choices: Array<Choice>) {
    }
}

class Game {
    /**
     * vers négatif à coup de -1 chaque game over
     */
    public score = 0;
    private ctx: CanvasRenderingContext2D;

    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d');
    }

    public run() {
        this.init();

        // const choices = [
        //     new Choice()
        // ]

        let choices = [
            { x: this.canvas.width * 0.2, y: this.canvas.height * 0.4, width: 100, height: 200, text: "Vers la banque", action: "foo1", response: "bar1" },
            { x: this.canvas.width * 0.4, y: this.canvas.height * 0.4, width: 100, height: 200, text: "Chez l'horloger", action: "foo2", response: "bar2" },
            { x: this.canvas.width * 0.6, y: this.canvas.height * 0.4, width: 100, height: 200, text: "Porte 3", action: "foo3", response: "bar3" },
            { x: this.canvas.width * 0.8, y: this.canvas.height * 0.4, width: 100, height: 200, text: "Porte 4", action: "foo4", response: "bar4" }
        ];

        let currentRoom = null;

        this.canvas.addEventListener('click', (e) => {
            if (currentRoom) {
                currentRoom = null;
                this.drawChoices(choices);
            } else {
                const { offsetX, offsetY } = e;
                choices.forEach(door => {
                    if (offsetX > door.x && offsetX < door.x + door.width && offsetY > door.y && offsetY < door.y + door.height) {
                        currentRoom = door;
                        this.drawRoom(door);
                    }
                });
            }
        });

        this.drawChoices(choices);
    }

    private drawChoices(choices) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        choices.forEach(door => {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            this.ctx.fillRect(door.x, door.y, door.width, door.height);
            this.ctx.fillStyle = 'black';
            this.ctx.fillText(door.text, door.x + 10, door.y + 110);
        });
    }

    private drawRoom(room) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Vous êtes dans la ${room.text}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 100);
        this.ctx.fillText(`Action: ${room.action}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 70);
        this.ctx.fillText(`Réponse: ${room.response}`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 40);
        this.ctx.fillText(`Cliquez pour revenir`, this.canvas.width / 2 - 100, this.canvas.height / 2 - 10);
    }

    private gameover() {
        this.score--;
        this.init();
    }

    public init() {
        this.setBackground(unicornImg);

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    public setBackground(img) {
        this.canvas.style.backgroundImage = `url(${img})`;
    }
}

const game = new Game(document.getElementById('gameCanvas') as HTMLCanvasElement);

game.run();

