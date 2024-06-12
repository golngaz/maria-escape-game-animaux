import backgrounds from './backgrounds';
import Scene from './Scene';
import Button from './Button';
import Rect from './Rect';

export type SceneDataType = { img: string, name: string, choices: Array<{ link: string, title: string }> };

export type Tree = Record<string, Scene>;

export default class Loader {
    constructor(private data: Record<string, SceneDataType>, private canvas) {
    }

    private rectFromIndex(index: number) {
        const height = 0.1 * this.canvas.height;
        const startButtons = this.canvas.height * 0.6;

        return new Rect(
            this.canvas.width * 0.1,
            startButtons + (index * height),
            this.canvas.width * 0.8,
            height - 10
        )
    }

    private sceneFromData(data: SceneDataType): Scene {
        const image = backgrounds[data.img]

        let scene = new Scene(image, data.name, []);
        data.choices.forEach((choiceDatum, i) => {
            let rect = this.rectFromIndex(i);
            console.log(rect);
            scene.choices.push(new Button(rect, choiceDatum.link, choiceDatum.title));
        });

        return scene;
    }

    public tree(): Record<string, Scene> {
        let result = {}
        const data = this.data;

        Object.keys(data).forEach(key => {
            result[key] = this.sceneFromData(data[key]);
        });

        return result;
    }
}
