import EventInterface from './EventInterface';
import Game from '../../Game';

export default class SelectChoiceEvent implements EventInterface {
    constructor(public game: Game, public index: number) {
    }
}
