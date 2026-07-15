export interface Books<T> {
    add(item: T): void;
    getAll(): T[];
}
export declare class Library<T> implements Books<T> {
    private items;
    add(item: T): void;
    getAll(): T[];
}
//# sourceMappingURL=bookStore.d.ts.map