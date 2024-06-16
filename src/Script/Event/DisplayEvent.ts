import EventInterface from './EventInterface';
import Game from '../../Game';

export default class DisplayEvent implements EventInterface {
    constructor(public game: Game) {
    }
}
