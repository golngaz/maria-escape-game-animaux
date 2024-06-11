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
        return new Rect(
            this.canvas.width * (((index + 1) * 2) / 10),
            this.canvas.height * 0.4,
            100,
            200
        )
    }

    private sceneFromData(data: SceneDataType): Scene {
        const image = backgrounds[data.img]

        let scene = new Scene(image, data.name, []);
        data.choices.forEach((choiceDatum, i) => {
            scene.choices.push(new Button(this.rectFromIndex(i), choiceDatum.link, choiceDatum.title));
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
