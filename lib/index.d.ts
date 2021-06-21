interface Person {
    id: string;
    name: string;
    job: string;
}
interface Identifiable {
    id: string;
}
interface Database<T extends Identifiable> {
    set(newValue: T): void;
    get(id: string): T | undefined;
}
declare class InMemoryDatabase<T extends Identifiable> implements Database<T> {
    private db;
    set(newValue: T): void;
    get(id: string): T | undefined;
}
declare const peopleDB: InMemoryDatabase<Person>;
