export default class Rect {
    constructor(public x, public y, public width, public height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(x, y) {
        return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
    }
}
