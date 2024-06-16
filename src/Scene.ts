import Button from './Button';
import HandlerInterface from './Script/Event/HandlerInterface';

export default class Scene {
    constructor(public img, public title, public dialog: string, public choices: Array<Button>, public handlers: HandlerInterface[] = []) {
    }
}
