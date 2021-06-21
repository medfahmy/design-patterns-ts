import { Identifiable, Database } from "./types";

export default function createFactoryDatabase<T extends Identifiable>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T | undefined {
      return this.db[id];
    }
  }
  return InMemoryDatabase;
}
