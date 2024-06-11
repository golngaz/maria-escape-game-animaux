import Button from './Button';

export default class Scene {
    constructor(public img, public text: string, public choices: Array<Button>) {
    }
}
