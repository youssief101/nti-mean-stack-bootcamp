import { Point2D } from "./point2D.js";
export class Point3D extends Point2D {
    z;
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    distance(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2) + Math.pow(point.z - this.z, 2));
    }
}
//# sourceMappingURL=point3D.js.map