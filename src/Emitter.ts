export default class Emitter {
    private references = [];
    private index = 0;

    public emit(element: HTMLElement, eventName: string, originalHandler, ...params): number {

        const handler = (event) => {originalHandler(event, ...params)};


        this.references[this.index] = {element, handler, eventName};

        element.addEventListener(eventName, this.references[this.index].handler);

        this.index++

        return this.index - 1;
    }

    public off(index: number): void {
        const ref = this.references[index];

        if (!ref) {
            console.warn('event ' + index + ' unknown');
            return;
        }

        ref.element.removeEventListener(ref.eventName, ref.handler);
        delete this.references[index];
    }
}
