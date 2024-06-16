import Rect from './Rect';
import { Tree } from './Game';

/**
 * Actually, button IS a choice
 */
export default class Button {
    constructor(public rect: Rect, public treeLink: keyof Tree, public text: string = '') {
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const gradient1 = ctx.createLinearGradient(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

        gradient1.addColorStop(0, '#f1dea7C8');
        gradient1.addColorStop(0.08, '#FDB931C8');
        gradient1.addColorStop(0.25, '#fcc869C8');
        gradient1.addColorStop(0.400, 'rgba(210,166,87,0.78)');
        gradient1.addColorStop(0.80, '#FDB931C8');
        gradient1.addColorStop(0.95, '#f1dea7C8');

        ctx.fillStyle = gradient1;
        ctx.beginPath()
        ctx.roundRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height, [15]);
        ctx.fill();
        ctx.stroke()

        if (this.text) {
            ctx.font = '20px "Playwrite NL"';
            ctx.fillStyle = 'rgba(3, 55, 150)';
            this.text.split('\n').forEach((line, i) => {
                const lineY = this.rect.y + 35 + (40 * i);
                ctx.fillText(line, this.rect.x + 20, lineY);
            })
        }
    }
}
