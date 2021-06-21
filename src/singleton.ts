import { Identifiable, Database } from "./types";

export default function createSingletonDatabase<T extends Identifiable>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    static instance: InMemoryDatabase = new InMemoryDatabase();

    private constructor() {}

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T | undefined {
      return this.db[id];
    }
  }

  return InMemoryDatabase;
  // const db = new InMemoryDatabase();
  // return db;
}
