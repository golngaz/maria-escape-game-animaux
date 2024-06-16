import DisplayEvent from './DisplayEvent';
import EventInterface from './EventInterface';
import HandlerInterface from './HandlerInterface';
import Game from '../../Game';

export default class DisplayWrapperHandler implements HandlerInterface {
    constructor(private handler: (game: Game) => void) {
    }

    public supports(event: EventInterface): boolean {
        return event instanceof DisplayEvent
    }

    public handle(event: EventInterface): void {
        this.handler((event as DisplayEvent).game);
    }
}
