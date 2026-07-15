import {Point2D} from "./point2D.js";

export class Point3D extends Point2D {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  distance(point: Point3D): number {
    return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2) + Math.pow(point.z - this.z, 2));
  }
}
