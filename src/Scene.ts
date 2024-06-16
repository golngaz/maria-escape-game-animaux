import Button from './Button';
import HandlerInterface from './Script/Event/HandlerInterface';

export default class Scene {
    constructor(public img, public text: string, public choices: Array<Button>, public handlers: HandlerInterface[] = []) {
    }
}
