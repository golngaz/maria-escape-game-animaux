import Rect from './Rect';
import { Tree } from './Loader';

/**
 * Actually, button IS a choice
 */
export default class Button {
    constructor(public rect: Rect, public treeLink: keyof Tree, public text: string = '') {
    }

    public draw(ctx) {
        this.rect.draw(ctx);

        if (this.text) {
            ctx.fillStyle = 'black';
            ctx.fillText(this.text, this.rect.x + 10, this.rect.y + 20);
        }
    }
}
