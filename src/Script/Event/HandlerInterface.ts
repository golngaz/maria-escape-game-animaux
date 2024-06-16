import EventInterface from './EventInterface';

export default interface HandlerInterface {
    supports(event: EventInterface): boolean;

    handle(event: EventInterface): void;
}
