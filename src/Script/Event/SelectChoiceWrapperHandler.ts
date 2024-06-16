import DisplayEvent from './DisplayEvent';
import EventInterface from './EventInterface';
import HandlerInterface from './HandlerInterface';
import Game from '../../Game';
import SelectChoiceEvent from './SelectChoiceEvent';

export default class SelectChoiceWrapperHandler implements HandlerInterface {
    constructor(private index, private handler: (game: Game) => void) {
    }

    public supports(event: EventInterface): boolean {
        return event instanceof SelectChoiceEvent && event.index === this.index;
    }

    public handle(event: EventInterface): void {
        this.handler((event as DisplayEvent).game);
    }
}
