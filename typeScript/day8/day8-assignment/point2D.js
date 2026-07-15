export class Point2D {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }
}
//# sourceMappingURL=point2D.js.map