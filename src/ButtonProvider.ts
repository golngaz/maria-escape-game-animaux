import Rect from './Rect';
import Button from './Button';
import { Tree } from './Loader';

export default class ButtonProvider {
    private static rectFromIndex(height: number, width: number, index: number) {
        const heightBtn = 0.1 * height;
        const startButtons = height * 0.6;

        return new Rect(
            width * 0.1,
            startButtons + (index * heightBtn),
            width * 0.8,
            heightBtn - 10
        )
    }

    public static provideFromCanvas(canvas: HTMLCanvasElement, index, link: keyof Tree, text: string) {
        return new Button(this.rectFromIndex(canvas.height, canvas.width, index), link, text);
    }
}
