export interface Books<T> {
  add(item: T): void;
  getAll(): T[];
}

export class Library<T> implements Books<T> {
  private items: T[] = []; // empty list of items

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}
